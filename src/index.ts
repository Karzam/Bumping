import { Application, Loader } from 'pixi.js'
import Stage from './stage'

const app: Application = new Application({
  width: window.innerWidth,
  height: window.innerHeight,
  resolution: window.devicePixelRatio,
});

app.renderer.view.width = window.innerWidth;
app.renderer.view.height = window.innerHeight;

const stage: Stage = Stage.getInstance();

Loader.shared.add(['assets/bumper.png']).load(init);

function init(): void
{
  stage.instantiatePlayer();

  app.renderer.render(stage);
  app.renderer.backgroundColor = 0x8C7AE6;

  loop();
}

function loop(): void
{
  requestAnimationFrame(loop);
  app.renderer.render(stage);
}

document.body.appendChild(app.view);