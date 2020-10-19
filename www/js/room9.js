room9.prototype = Object.create(THREE.Object3D.prototype);
room9.prototype.constructor = room9;

function room9(scene) {
    THREE.Object3D.call(this);
    var room9 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Rsif/9.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom8 = new NavigationArrow(scene, {
        degree: 270,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room9.remove();
            // Start a new room
            new room8(scene);
        },
    });

    this.navigationArrowToroom6 = new NavigationArrow(scene, {
        degree: 0,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room9.remove();
            // Start a new room
            new room6(scene);
        },
    });

    this.navigationArrowToroom10 = new NavigationArrow(scene, {
        degree: 100,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room9.remove();
            // Start a new room
            new room10(scene);
            scene.rotation.y += 300 ;
        },
    });

    this.navigationArrowToroom32 = new NavigationArrow(scene, {
        degree: 210,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room9.remove();
            // Start a new room
            new room32(scene);
            //scene.rotation.y += 300 ;
        },
    });


    
    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom8.remove();
        this.navigationArrowToroom6.remove();
        this.navigationArrowToroom10.remove();        
        this.navigationArrowToroom32.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}