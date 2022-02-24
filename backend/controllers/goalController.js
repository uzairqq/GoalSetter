// @desc Get Goals
// @route Get /api/goals
// @access Private
const getGoals = async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
};

// @desc Create Goal
// @route Post /api/goal
// @access Private
const setGoal = async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a Text Feild");
  }

  console.log(req.body);
  res.status(200).json({ message: "Post Goals" });
};

// @desc Update Goal
// @route Put /api/goal
// @access Private
const updateGoal = async (req, res) => {
  res.status(200).json({ message: `Update Goals With Id: ${req.params.id}` });
};

// @desc Remove Goal
// @route Delete /api/goal
// @access Private
const deleteGoal = async (req, res) => {
  res.status(200).json({ message: `Delete Goals With Id: ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
