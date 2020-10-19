room21.prototype = Object.create(THREE.Object3D.prototype);
room21.prototype.constructor = room21;

function room21(scene) {
    THREE.Object3D.call(this);
    var room21 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Rsif/21.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom20= new NavigationArrow(scene, {
        degree: 190,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room21.remove();
            // Start a new room
            new room20(scene);
        },
    });

    this.navigationArrowToroom10= new NavigationArrow(scene, {
        degree: 90,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room21.remove();
            // Start a new room
            new room10(scene);
        },
    });

    this.navigationArrowToroom22= new NavigationArrow(scene, {
        degree: 280,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room21.remove();
            // Start a new room
            new room22(scene);
        },
    });

    this.navigationArrowToroom32= new NavigationArrow(scene, {
        degree: 350,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room21.remove();
            // Start a new room
            new room32(scene);
            scene.rotation.y -= 300 ;
        },
    });

    this.navigationArrowToroom31= new NavigationArrow(scene, {
        degree: 300,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room21.remove();
            // Start a new room
            new room31(scene);
            scene.rotation.y += 600 ;
        },
    });

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom20.remove();
        this.navigationArrowToroom10.remove();
        this.navigationArrowToroom22.remove();
        this.navigationArrowToroom32.remove();
        this.navigationArrowToroom31.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}