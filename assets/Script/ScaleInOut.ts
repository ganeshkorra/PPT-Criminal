import { _decorator, Component, Node, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ScaleInOut')
export class ScaleInOut extends Component {

    onLoad() {
        this.playLoopAnimation();
    }

   playLoopAnimation() {
    tween(this.node)
        .repeatForever(
            tween()
                .to(0.5, { scale: new Vec3(0.8, 0.8, 0.8) }, { easing: 'sineOut' })
                .to(0.5, { scale: new Vec3(0.709, 0.709, 0.709) }, { easing: 'sineIn' })
        )
        .start();
}
}