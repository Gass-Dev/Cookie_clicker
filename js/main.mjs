import {
    Bakery
} from './classes/_classes.bakery.mjs';
import {
    updateBakery
} from './DOM/_dom.bakery.mjs';
import {
    updateTuiles
} from './DOM/_dom.tuiles.mjs';
import {
    clickCookie
} from './DOM/_dom.bakery.mjs';

const myBakery = new Bakery();
updateBakery(myBakery)
updateTuiles()
clickCookie(myBakery)