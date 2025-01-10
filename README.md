# StackinPaper

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.5.

## Basic gameplay (work in progress)

- Each turn, a new "target card" is generated. This card is announced in the previous turn like in Tetris
- The target card has a colour (red, blue, green) and a value (1, 2, 3) - for now
- The card is added to one of the three colour stacks in the target area
- If one of the stacks reaches >3, the game is lost
- The players also holds "player cards"
- These have a colour and a number of values
- When a player card is played, the target stack (colour) has all cards removed with the same value as the played card
- When this happens the player receives points (bonus points for more cards destroyed)
- Each turn, the player recieves a random new card
- The player holds 3 cards in total
- By playing cards the player tries to collect points by keeping the stacks low

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
