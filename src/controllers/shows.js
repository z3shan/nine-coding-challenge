const showSchema = require("../validations/shows.validation");
const getShowsList = (req, res) => {

    try {
        const {body} = req;
        showSchema.validate(body);
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
        return res.status(200).send({"response": data});
    } catch (err) {
        return res.status(400)
                .setHeader('Content-Type', 'application/json')
            .send({
                "error": "Could not decode request: JSON parsing failed"
            });
    }

};

module.exports = {
    getShowsList,
};