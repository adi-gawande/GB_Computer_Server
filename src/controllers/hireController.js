import HireRequest from '../models/HireRequest.js';

// @desc    Submit hire request
// @route   POST /api/hire
export const submitHireRequest = async (req, res) => {
  try {
    const hireRequest = await HireRequest.create(req.body);
    
    // TODO: Send email notification
    
    res.status(201).json({
      success: true,
      message: 'Your project request has been submitted successfully! We will contact you soon.',
      data: hireRequest
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all hire requests (Admin)
// @route   GET /api/hire
export const getHireRequests = async (req, res) => {
  try {
    const { status, projectType } = req.query;
    const filter = {};
    
    if (status) filter.status = status;
    if (projectType) filter.projectType = projectType;

    const requests = await HireRequest.find(filter).sort('-createdAt');
    
    res.status(200).json({
      success: true,
      count: requests.length,
      data: requests
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get single hire request
// @route   GET /api/hire/:id
export const getHireRequest = async (req, res) => {
  try {
    const request = await HireRequest.findById(req.params.id);

    if (!request) {
      return res.status(404).json({ success: false, message: 'Request not found' });
    }

    res.status(200).json({ success: true, data: request });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update hire request status
// @route   PUT /api/hire/:id
export const updateHireRequest = async (req, res) => {
  try {
    const request = await HireRequest.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!request) {
      return res.status(404).json({ success: false, message: 'Request not found' });
    }

    res.status(200).json({ success: true, data: request });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete hire request
// @route   DELETE /api/hire/:id
export const deleteHireRequest = async (req, res) => {
  try {
    const request = await HireRequest.findByIdAndDelete(req.params.id);

    if (!request) {
      return res.status(404).json({ success: false, message: 'Request not found' });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
