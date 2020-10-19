room12.prototype = Object.create(THREE.Object3D.prototype);
room12.prototype.constructor = room12;

function room12(scene) {
    THREE.Object3D.call(this);
    var room12 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Rsif/12.jpg');

    this.textLights = new TextLights(scene, {});

   this.navigationArrowToroom11 = new NavigationArrow(scene, {
        degree: 10,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room12.remove();
            // Start a new room
            new room11(scene);
        },
    });
    
    this.navigationArrowToroom13= new NavigationArrow(scene, {
        degree: 270,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room12.remove();
            // Start a new room
            new room13(scene);
        },
    });

    /*this.navigationArrowToroom6= new NavigationArrow(scene, {
        degree: 280,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room12.remove();
            // Start a new room
            new room6(scene);
            scene.rotation.y += 600 ;
        },
    });

    this.navigationArrowToroom17= new NavigationArrow(scene, {
        degree: 100,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room12.remove();
            // Start a new room
            new room17(scene);
            scene.rotation.y += 600 ;
        },
    });*/

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom11.remove();
        this.navigationArrowToroom13.remove();
        //this.navigationArrowToroom6.remove();
        //this.navigationArrowToroom17.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}