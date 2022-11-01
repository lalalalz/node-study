import "reflect-metadata";
import {controllers} from "./controllers";



function start() {

    console.log("시작했습니다.");

    controllers.map(c => {

        const prefixRoute = Reflect.getMetadata("PREFIXROUTE", c);

        const metadata = Reflect.getMetadata("ROUTES", c);


    });
}

start();