room23.prototype = Object.create(THREE.Object3D.prototype);
room23.prototype.constructor = room23;

function room23(scene) {
    THREE.Object3D.call(this);
    var room23 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Rsif/23.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom22 = new NavigationArrow(scene, {
        degree: 120,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room23.remove();
            // Start a new room
            new room22(scene);
        },
    });

    this.navigationArrowToroom24 = new NavigationArrow(scene, {
        degree: 260,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room23.remove();
            // Start a new room
            new room24(scene);
        },
    });

    this.navigationArrowToroom19 = new NavigationArrow(scene, {
        degree: 180,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room23.remove();
            // Start a new room
            new room19(scene);
        },
    });

    this.navigationArrowToroom30 = new NavigationArrow(scene, {
        degree: 370,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room23.remove();
            // Start a new room
            new room30(scene);
            scene.rotation.y += 600 ;
        },
    });
    
    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom22.remove();
        this.navigationArrowToroom24.remove();
        this.navigationArrowToroom19.remove();
        this.navigationArrowToroom30.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}