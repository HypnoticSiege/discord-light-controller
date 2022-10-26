# Discord Light Contoller
 Control your Lifx Smart Lights via a Discord Bot.

## Installation
- First off clone the repository using `git` or download directly off of GitHub.
- Open the `.env.sample` and configure it as needed by filling out all fields.
- Rename the file to `.env`
- Next, open a terminal into the root directory of the bot and run the following commands:
```bash
$ yarn install
```
```bash
$ yarn build
```
```bash
$ yarn start
```

#### Follow these steps before `yarn start` if you have not ran the bot before:
- Deploy the commands to a specific guild:
```bash
$ yarn deploy:guild
```
- Or if you want the commands accesible from any guild globally
```bash
$ yarn deploy:global
```

## What's next?
I've got a lot of future plans of features and updates for this project.. let's hope I actually get to them and not abandon them like every single other side-project! If I do, then you can gladly add the feature on a fork of this repository and create a pull-request. Boom! Now you have something new to add to your portfolio or resume :o
- Web-Based Dashboard in either Express/EJS or Vue w/ Express backend
- Light Modes (Police, Smooth RGB, Flashing, ect)
- Per light commands?
- Get a light's current power status


## Credits
Huge shout out the the following people/organizations for making Discord Light Controller possible with my limited knowledge on the new v13/v14 Discord JS Library!
- [Discord JS Guide](https://discordjs.guide/)  

Tazio and his legacy Discord Bot called "Lyfe" also contributed heavily to the idea and execution of this project. The bot had a basic Lifx Controller along with other great commands!
- [Tazio de Bruin](https://en.tazio.nl/)