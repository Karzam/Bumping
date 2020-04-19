import { Engine, World, Render, Runner, MouseConstraint, Bodies, Body } from "matter-js";
import Player from "./player";
import Ball from "./ball";
import Ground from "./ground";
import Opponent from "./opponent";

export default class Game
{
  private static instance: Game;

  public engine: Engine;

  public render: Render;

  public world: World;

  public mouseConstraint: MouseConstraint;

  constructor() {
    if (!Game.instance) {
      Game.instance = this;
    }

    this.engine = Engine.create();

    this.world = this.engine.world;
    this.world.gravity.y = 0;

    const element: HTMLElement = document.body.querySelector('.container');

    this.render = Render.create({
      element,
      engine: this.engine,
      options: {
        width: element.clientWidth,
        height: element.clientHeight,
        wireframes: false,
        background: 'white',
      }
    });

    Render.run(this.render);

    const runner: Runner = Runner.create();
    Runner.run(runner, this.engine);

    const ground: Ground = new Ground();
    const player: Player = new Player();
    const opponent: Opponent = new Opponent();
    const ball: Ball = new Ball();
  }

  public static getInstance(): Game {
    return Game.instance || new Game();
  }
}