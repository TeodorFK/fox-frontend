const axios = require('axios');


//Henter og viser rever på forsiden. Henter fra backend
const index = async (req, res) => {
  const randomFox1 = await axios.get('http://10.12.5.12:4000/fox1');
  const randomFox2 = await axios.get('http://10.12.5.12:4000/fox2');
  try {
    //Sender dataen til index.ejs
    res.render('index', { randomFox1, randomFox2 });
  } catch (err) {
    console.log(err);
  }
};

// Sender score for en bestemt fox. Basert etter iden.
const sendScore = async (req, res) => {
  try {
    //Henter fox id
    const foxId = req.params.foxId;
    //Sender post request til backend for å legge til ny score
    const result = await axios.post(`http://10.12.5.12:4000/score/${foxId}`);
    console.log(result);
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  index,
  sendScore,
};
