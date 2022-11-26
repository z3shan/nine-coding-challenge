const showSchema = require("../validations/shows.validation");
const getShowsList = (req, res) => {
    const {body} = req;
    const {error} = showSchema.validate(body);

    if (error) {
        return res.status(400)
            .send({
                "error": error
            });
    }

    const data = [];


    for (const show of body.payload) {
        if (show.drm && show.episodeCount > 1) {
            data.push({
                image: show.image,
                slug: show.slug,
                title: show.title

            });
        }
    }


    return res.status(200).send({"message": "success !", "response": data});

};

module.exports = {
    getShowsList,
};