const Pet = ({name, animal, breed}) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed)
    ])
}

const App = () => {
  return React.createElement(
    "div",
    {},
    [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            name: "Sheba", 
            animal: "Dog", 
            breed: "Golden Retriever/Chow"
        }),
        
        React.createElement(Pet, {
            name: "Shasha", 
            animal: "Dog", 
            breed: "German Shepard"
        }),

        React.createElement(Pet, {
            name: "JT", 
            animal: "Snake", 
            breed: "Corn Snake"
        })
    ]
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
