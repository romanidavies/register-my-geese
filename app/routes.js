const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


// ***************************************
// Version 2 - register my geese
// ***************************************

// ** sole income - branching

router.post('/02/05-branch-is-this-your-sole-income', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const SoleIncome = req.session.data['sole-income']

  switch (SoleIncome) {

    case 'yes':
      res.redirect ('/02/05a-01-check-your-answers');
      break;

    case 'no':
      res.redirect ('/02/05b-01-check-your-answers');
      break;
  }

})

// ** END: sole income - branching

module.exports = router
