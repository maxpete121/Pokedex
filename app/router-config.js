import { AccountController } from "./controllers/AccountController.js";
import { HomeController } from "./controllers/HomeController.js";
import { PokemonController } from "./controllers/PokemonController.js";
import { SandboxController } from "./controllers/SandboxController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [PokemonController, SandboxController],
    view: 'app/views/HomeView.html'
  },
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController, SandboxController],
    view: 'app/views/AccountView.html',
  }
])




