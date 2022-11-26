const getShowsList = (req, res) => {



    const data = [];






    return res.status(200).send({"message": "success !", "response": data});

};

module.exports = {
    getShowsList,
};