room32.prototype = Object.create(THREE.Object3D.prototype);
room32.prototype.constructor = room32;

function room32(scene) {
    THREE.Object3D.call(this);
    var room32 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Rsif/32.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom31 = new NavigationArrow(scene, {
        degree: 150,//50
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room32.remove();
            // Start a new room
            new room31(scene);
            scene.rotation.y -= 300 ;
        },
    });

    this.navigationArrowToroom9= new NavigationArrow(scene, {
        degree: 55,//250
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room32.remove();
            // Start a new room
            new room9(scene);
        },
    });

    this.navigationArrowToroom8= new NavigationArrow(scene, {
        degree: 10,//250
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room32.remove();
            // Start a new room
            new room8(scene);
        },
    });

    this.navigationArrowToroom21= new NavigationArrow(scene, {
        degree: 90,//250
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room32.remove();
            // Start a new room
            new room21(scene);
            scene.rotation.y += 300 ;
        },
    });

    this.navigationArrowToroom33= new NavigationArrow(scene, {
        degree: -120,//250
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room32.remove();
            // Start a new room
            new room33(scene);
            scene.rotation.y += 200 ;
        },
    });

    

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom31.remove();
        this.navigationArrowToroom9.remove();
        this.navigationArrowToroom8.remove();
        this.navigationArrowToroom21.remove();
        this.navigationArrowToroom33.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}