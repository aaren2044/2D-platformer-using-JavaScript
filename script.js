const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

let parsedCollisions 
let collisionBlocks
let background
let doors 
const player = new Player({
    imageSrc:'./img/king/idle.png',
    frameRate:11,
    animations: {
        idleRight: {
            frameRate: 11,
            frameBuffer: 6,
            loop: true,
            imageSrc:'./img/king/idle.png',

        },
        idleLeft: {
            frameRate: 11,
            frameBuffer: 6,
            loop: true,
            imageSrc:'./img/king/idleLeft.png',

        },
        runRight: {
            frameRate: 8,
            frameBuffer: 10,
            loop: true,
            imageSrc:'./img/king/runRight.png',

        },
        runLeft: {
            frameRate: 8,
            frameBuffer: 10,
            loop: true,
            imageSrc:'./img/king/runLeft.png',

        },
        enterDoor: {
            frameRate: 8,
            frameBuffer: 10,
            loop: false,
            imageSrc:'./img/king/enterDoor.png',
            onComplete: ()=> {
                console.log('completed animation')
                gsap.to(overlay, {
                    opacity: 1,
                    onComplete: () => {
                        level++
                        levels[level].init()
                        player.switchSprite('idleRight')
                        player.preventInput = false
                        gsap.to(overlay, {
                            opacity: 0
                        })
                    }
                })
            },
        },
    }
})

let level = 1
let levels = {
    1:{
        init: () =>{
             parsedCollisions = collisionsLevel1.parse2D()
             collisionBlocks = parsedCollisions.createObjectsFrom2D()
             player.collisionBlocks = collisionBlocks
             player.position.x = 700
             player.position.y = 200

             if(player.currentAnimation) player.currentAnimation.isActive = false

             background = new Sprite({
                position: {
                 x: 0,
                 y: 0,
                },
                imageSrc: './img/alkali first 3.png'
            })
            doors = [
                new Sprite({
                    position:{
                        x:175,
                        y:335
                    },
                    imageSrc: './img/doorOpen.png',
                    frameRate: 5,
                    frameBuffer:5,
                    loop: false,
                    autoplay: false,
                })
            ]
        }
    },
    2:{
        init: () =>{
             parsedCollisions = collisionsLevel2.parse2D()
             collisionBlocks = parsedCollisions.createObjectsFrom2D()
             player.collisionBlocks = collisionBlocks
             player.position.x = 100
             player.position.y = 200

             if(player.currentAnimation) player.currentAnimation.isActive = false

             background = new Sprite({
                position: {
                 x: 0,
                 y: 0,
                },
                imageSrc: './img/backgroundLevel2.png'
            })
            doors = [
                new Sprite({
                    position:{
                        x:850,
                        y:210
                    },
                    imageSrc: './img/doorOpen.png',
                    frameRate: 5,
                    frameBuffer:5,
                    loop: false,
                    autoplay: false,
                })
            ]
        }
    },
    3:{
        init: () =>{
             parsedCollisions = collisionsLevel3.parse2D()
             collisionBlocks = parsedCollisions.createObjectsFrom2D()
             player.collisionBlocks = collisionBlocks
             player.position.x = 100
             player.position.y = 200

             if(player.currentAnimation) player.currentAnimation.isActive = false

             background = new Sprite({
                position: {
                 x: 0,
                 y: 0,
                },
                imageSrc: './img/backgroundLevel3.png'
            })
            doors = [
                new Sprite({
                    position:{
                        x:860,
                        y:206
                    },
                    imageSrc: './img/doorOpen.png',
                    frameRate: 5,
                    frameBuffer:5,
                    loop: false,
                    autoplay: false,
                })
            ]
        }
    },
    4:{
        init: () =>{
             parsedCollisions = collisionsLevel4.parse2D()
             collisionBlocks = parsedCollisions.createObjectsFrom2D()
             player.collisionBlocks = collisionBlocks
             player.position.x = 100
             player.position.y = 200

             if(player.currentAnimation) player.currentAnimation.isActive = false

             background = new Sprite({
                position: {
                 x: 0,
                 y: 0,
                },
                imageSrc: './img/backgroundLevel4.png'
            })
            doors = [
                new Sprite({
                    position:{
                        x:847,
                        y:395
                    },
                    imageSrc: './img/doorOpen.png',
                    frameRate: 5,
                    frameBuffer:5,
                    loop: false,
                    autoplay: false,
                })
            ]
        }
    },
    5:{
        init: () =>{
             parsedCollisions = collisionsLevel5.parse2D()
             collisionBlocks = parsedCollisions.createObjectsFrom2D()
             player.collisionBlocks = collisionBlocks
             player.position.x = 100
             player.position.y = 200

             if(player.currentAnimation) player.currentAnimation.isActive = false

             background = new Sprite({
                position: {
                 x: 0,
                 y: 0,
                },
                imageSrc: './img/backgroundLevel5.png'
            })
            doors = [
                new Sprite({
                    position:{
                        x:85,
                        y:395
                    },
                    imageSrc: './img/doorOpen.png',
                    frameRate: 5,
                    frameBuffer:5,
                    loop: false,
                    autoplay: false,
                })
            ]
        }
    },
    6:{
        init: () =>{
             parsedCollisions = collisionsLevel6.parse2D()
             collisionBlocks = parsedCollisions.createObjectsFrom2D()
             player.collisionBlocks = collisionBlocks
             player.position.x = 80
             player.position.y = 295

             if(player.currentAnimation) player.currentAnimation.isActive = false

             background = new Sprite({
                position: {
                 x: 0,
                 y: 0,
                },
                imageSrc: './img/backgroundLevel6.png'
            })
            doors = [
                new Sprite({
                    position:{
                        x:400,
                        y:395
                    },
                    imageSrc: './img/doorOpen.png',
                    frameRate: 5,
                    frameBuffer:5,
                    loop: false,
                    autoplay: false,
                })
            ]
        }
    },
    7:{
        init: () =>{
             parsedCollisions = collisionsLevel7.parse2D()
             collisionBlocks = parsedCollisions.createObjectsFrom2D()
             player.collisionBlocks = collisionBlocks
             player.position.x = 100
             player.position.y = 200

             if(player.currentAnimation) player.currentAnimation.isActive = false

             background = new Sprite({
                position: {
                 x: 0,
                 y: 0,
                },
                imageSrc: './img/end.png'
            })
            doors = [
                new Sprite({
                    position:{
                        x:820,
                        y:140
                    },
                    imageSrc: './img/doorOpen1.png',
                    frameRate: 5,
                    frameBuffer:5,
                    loop: false,
                    autoplay: false,
                })
            ]
        }
    },
}

const keys = {
    w:{
        pressed: false,
    },
    a: {
        pressed: false,
    },
    d:{
        pressed: false,
    },
}

const overlay = {
    opacity: 0
}

function animate() {
    window.requestAnimationFrame(animate)

    background.draw()
    // collisionBlocks.forEach(collisionBlock => {
    //     collisionBlock.draw()
    // })

    doors.forEach(door => {
        door.draw()
    })

    player.handleInput(keys)
    player.draw()
    player.update()

    c.save()
    c.globalAlpha = overlay.opacity
    c.fillStyle = 'black'
    c.fillRect(0,0,canvas.width,canvas.height)
    c.restore()
    
}

levels[level].init()
animate()

