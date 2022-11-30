const showSchema = require("../validations/shows.validation");
const getShowsList = (req, res) => {

    try {
        const {body} = req;
        showSchema.validate(JSON.parse(JSON.stringify(body)));
       // JSON.parse(JSON.stringify(body))
        const data = [];
        for (const show of body.payload) {
            if (show.drm && show.episodeCount > 0) {
                data.push({
                    image: show.image,
                    slug: show.slug,
                    title: show.title

                });
            }
        }
        return res.status(200).json({response: data});
    } catch (err) {

        return res.status(400)
            .json({
                error: "Could not decode request: JSON parsing failed"
            });
    }

};

module.exports = {
    getShowsList,
};