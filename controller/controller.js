const axios = require('axios');

const index = async (req, res) => {
  const randomFox1 = await axios.get('http://10.12.5.12:4000/fox1');
  const randomFox2 = await axios.get('http://10.12.5.12:4000/fox2');
  try {
    res.render('index', { randomFox1, randomFox2 });
    console.log(randomFox1);
  } catch (err) {
    console.log(err);
  }
};

const sendVote = async (req, res) => {
  try {
    const foxId = req.params.foxId;
    const result = await axios.post(`http://10.12.5.12/4000/votes/${foxId}`);
    console.log(result);
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  index,
  sendVote,
};
