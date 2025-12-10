import Newsletter from '../models/Newsletter.js';

// @desc    Subscribe to newsletter
// @route   POST /api/newsletter/subscribe
export const subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    const exists = await Newsletter.findOne({ email });
    if (exists) {
      return res.status(400).json({ 
        success: false, 
        message: 'This email is already subscribed' 
      });
    }

    const subscription = await Newsletter.create({ email });
    
    res.status(201).json({
      success: true,
      message: 'Successfully subscribed to newsletter!',
      data: subscription
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all subscribers (Admin)
// @route   GET /api/newsletter
export const getSubscribers = async (req, res) => {
  try {
    const subscribers = await Newsletter.find({ isActive: true }).sort('-createdAt');
    
    res.status(200).json({
      success: true,
      count: subscribers.length,
      data: subscribers
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Unsubscribe from newsletter
// @route   DELETE /api/newsletter/:email
export const unsubscribe = async (req, res) => {
  try {
    const subscription = await Newsletter.findOneAndUpdate(
      { email: req.params.email },
      { isActive: false },
      { new: true }
    );

    if (!subscription) {
      return res.status(404).json({ success: false, message: 'Subscription not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Successfully unsubscribed from newsletter'
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
