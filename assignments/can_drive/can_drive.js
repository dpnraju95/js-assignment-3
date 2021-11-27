function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    if(hasDrivingLiscence==false || isTired==false || isSober==true) {
        return String("You cannot drive")
    }
    else if((hasDrivingLiscence==true || isTired==false || isSober==true)){
        return String("You can drive")
    }
    else if((hasDrivingLiscence==true || isTired==true || isSober==false)){
        return String("You Shouldnot drive")
    }
}

module.exports = CanDrive;
