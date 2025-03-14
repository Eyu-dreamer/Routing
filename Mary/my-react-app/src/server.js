import { createServer, Model } from "miragejs";

export function makeServer() {
    // ✅ Export function
    return createServer({
        models: {
            van: Model,
        },

        seeds(server) {
            server.create("van", {
                id: "1",
                name: "Modest Explorer",
                price: 60,
                description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
                imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
                type: "simple",
            });
            server.create("van", {
                id: "2",
                name: "Beach Bum",
                price: 80,
                description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
                imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png",
                type: "rugged",
            });
            server.create("van", {
                id: "3",
                name: "Reliable Red",
                price: 100,
                description: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
                imageUrl: "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png",
                type: "luxury",
            });
        },

        routes() {
            this.namespace = "api";
            this.logging = false;

            this.get("/vans", (schema, request) => {
                return schema.vans.all();
            });

            this.get("/vans/:id", (schema, request) => {
                const id = request.params.id;
                return schema.vans.find(id);
            });
        },
    });
}