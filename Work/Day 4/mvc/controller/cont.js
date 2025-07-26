const first = (req, res) => {
  res.send('First controller response');
}

const second=(req,res)=>{
  res.send("Second Controller Responce")
}

module.exports = { first,second };
