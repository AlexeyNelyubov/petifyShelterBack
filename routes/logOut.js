const logOut = (req, res)=> {
    if (req.session) console.log('sess2', req.session.id)
    res.status(200).json({session:'session'})
};

module.exports = { logOut }