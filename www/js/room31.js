room31.prototype = Object.create(THREE.Object3D.prototype);
room31.prototype.constructor = room31;

function room31(scene) {
    THREE.Object3D.call(this);
    var room31 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Rsif/31.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom30 = new NavigationArrow(scene, {
        degree: 90,//50
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room31.remove();
            // Start a new room
            new room30(scene);
        },
    });

    this.navigationArrowToroom22= new NavigationArrow(scene, {
        degree: 10,//250
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room31.remove();
            // Start a new room
            new room22(scene);
            scene.rotation.y += 600 ;
        },
    });

    this.navigationArrowToroom32= new NavigationArrow(scene, {
        degree: 230,//250
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room31.remove();
            // Start a new room
            new room32(scene);
            scene.rotation.y += 300 ;
        },
    });

    this.navigationArrowToroom21= new NavigationArrow(scene, {
        degree: 310,//250
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room31.remove();
            // Start a new room
            new room21(scene);
            scene.rotation.y += 200 ;
        },
    });

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom30.remove();
        this.navigationArrowToroom22.remove();
        this.navigationArrowToroom32.remove();
        this.navigationArrowToroom21.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}