// import { render }from react-dom;
// import Pet from './Pet';
const App = ()=>{
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            name: "Luna",
            animal: "Dog",
            breed: "Havanese"
        }),
        React.createElement(Pet, {
            name: "Pepper",
            animal: "Bird",
            breed: "Cockatiel"
        }),
        React.createElement(Pet, {
            name: "Doink",
            animal: "Cat",
            breed: "Mix"
        })
    ]);
};
_c = App;
ReactDOM.render(React.createElement(App), document.getElementById("root"));
var _c;
$RefreshReg$(_c, "App");

//# sourceMappingURL=index.9e7b1db9.js.map
