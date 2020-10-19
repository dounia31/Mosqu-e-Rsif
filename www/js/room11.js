room11.prototype = Object.create(THREE.Object3D.prototype);
room11.prototype.constructor = room11;

function room11(scene) {
    THREE.Object3D.call(this);
    var room11 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Rsif/11.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom10 = new NavigationArrow(scene, {
        degree: 10,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room11.remove();
            // Start a new room
            new room10(scene);
            //scene.rotation.y += 600 ;

        },
    });

    this.navigationArrowToroom12= new NavigationArrow(scene, {
        degree: 190,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room11.remove();
            // Start a new room
            new room12(scene);
            //scene.rotation.y += 600 ;
        },
    });

    this.navigationArrowToroom20= new NavigationArrow(scene, {
        degree: 280,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room11.remove();
            // Start a new room
            new room20(scene);
        },
    });

    /*this.navigationArrowToroom18= new NavigationArrow(scene, {
        degree: 100,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room11.remove();
            // Start a new room
            new room18(scene);
            scene.rotation.y += 600 ;
        },
    });*/
 
    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom10.remove();
        this.navigationArrowToroom20.remove();
        this.navigationArrowToroom12.remove();
        //this.navigationArrowToroom18.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}