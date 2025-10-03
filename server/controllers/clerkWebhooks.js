import User from "../models/User.js";
import { Webhook } from "svix";
import connectDB from "../lib/connectDB.js";

const clerkWebhooks = async (req, res) => {
  try {
    await connectDB();

    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    await whook.verify(JSON.stringify(req.body), headers);

    const { data, type } = req.body;

    const userData = {
      _id: data.id,
      email: data.email_addresses[0].email_address,
      username: data.first_name + " " + data.last_name,
      image: data.image_url,
    };

    switch (type) {
      case "user.created":
        await User.create(userData);
        break;

      case "user.updated":
        await User.findByIdAndUpdate(data.id, userData);
        break;

      default:
        break;
    }

    return res.status(200).json({ success: true, message: "Webhook Received" });
  } catch (error) {
    console.error("Webhook Error:", error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const config = {
  api: {
    bodyParser: false, 
  },
};

export default clerkWebhooks;
