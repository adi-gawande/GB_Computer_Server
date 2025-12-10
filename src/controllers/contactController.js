import Contact from '../models/Contact.js';

// @desc    Submit contact form
// @route   POST /api/contact
export const submitContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    
    // TODO: Send email notification
    
    res.status(201).json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.',
      data: contact
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all contacts (Admin)
// @route   GET /api/contact
export const getContacts = async (req, res) => {
  try {
    const { status } = req.query;
    const filter = status ? { status } : {};

    const contacts = await Contact.find(filter).sort('-createdAt');
    
    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update contact status
// @route   PUT /api/contact/:id
export const updateContactStatus = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({ success: false, message: 'Contact not found' });
    }

    res.status(200).json({ success: true, data: contact });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete contact
// @route   DELETE /api/contact/:id
export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({ success: false, message: 'Contact not found' });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
