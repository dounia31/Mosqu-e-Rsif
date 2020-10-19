room24.prototype = Object.create(THREE.Object3D.prototype);
room24.prototype.constructor = room24;

function room24(scene) {
    THREE.Object3D.call(this);
    var room24 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Rsif/24.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom23= new NavigationArrow(scene, {
        degree: 70,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room24.remove();
            // Start a new room
            new room23(scene);
            //scene.rotation.y += 300 ;
        },
    });

    this.navigationArrowToroom18= new NavigationArrow(scene, {
        degree: 180,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room24.remove();
            // Start a new room
            new room18(scene);
            //scene.rotation.y += 300 ;
        },
    });

    this.navigationArrowToroom25= new NavigationArrow(scene, {
        degree: 270,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room24.remove();
            // Start a new room
            new room25(scene);
            //scene.rotation.y += 300 ;
        },
    });

    this.navigationArrowToroom29= new NavigationArrow(scene, {
        degree: 370,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room24.remove();
            // Start a new room
            new room29(scene);
            scene.rotation.y += 600 ;
        },
    });

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom23.remove();
        this.navigationArrowToroom18.remove();
        this.navigationArrowToroom25.remove();
        this.navigationArrowToroom29.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}