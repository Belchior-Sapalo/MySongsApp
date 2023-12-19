$(document).ready(()=>{
    
    window.scrollTo(0,0);

    $(window).resize(()=>{
        if($('#menu-toggle').css('display') === 'none'){
            $('#about-image').attr('src', '../ASSETS/imagens/home-image.jpg')
        }else{
            $('#about-image').attr('src', '../ASSETS/imagens/about-img.png')
        }
    })
    
    $('#menu-toggle').click(()=>{
        if($('#bars-x').hasClass('fa-bars')){
            $('#bars-x').removeClass('fa-bars');
            $('#bars-x').addClass('fa-x');

            // show menu
            $('#nav-list').css({
                'left': '-10px'
            })

            $('#body').css({
                'overflow': "hidden"
            })
        }else{
            $('#bars-x').removeClass('fa-x');
            $('#bars-x').addClass('fa-bars');

            // hidden menu
            $('#nav-list').css({
                'left': '-110%'
            })

            $('#body').css({
                'overflow': 'auto'
            })
        }
    });

    //destacando link activo

    $(window).scroll(()=>{
        const top = window.scrollY;

        $('.section').each((index, sec) => {
            const posY = sec.offsetTop - 100;
            const heigth = sec.offsetHeight;
            console.log(heigth)
            const id = sec.id

            if(top >= posY && top < posY + heigth){
                $('.link').each((index, link)=>{
                    $(link).removeClass('activo');

                    document.querySelector('header nav ul li a[href*='+ id +']').classList.add('activo');
                })
            }
        })
    })

    // removendo menu a cada click em link

    $('.link').each((index, iten )=> {
        $(iten).click(()=>{
            $('#bars-x').removeClass('fa-x');
            $('#bars-x').addClass('fa-bars');

            // hidden menu
            $('#nav-list').css({
                'left': '-110%'
            })

            
            $('#body').css({
                'overflow': 'auto'
            })
        })
    });

    // scroll animation
    const sections = document.querySelectorAll('.section')
    const links = document.querySelectorAll('.link')

        const observador = new IntersectionObserver((entries)=>{
        
            entries.forEach( entry=>{
                if(entry.isIntersecting){
                    entry.target.classList.add('section-show')
                }else{
                    entry.target.classList.remove('section-show')
                }
            } )
            
        });
        sections.forEach( sec=>{
            observador.observe(sec)
        } )

        // mentes criminosas

        $('#btn-mm').click(()=>{
            $('#mm').css({
                'display': 'flex'
            });

            $('#title-project-section').css({
                'display': 'none'
            })
        })
        $('.close').each((index, btn)=>{
            $(btn).click(()=>{
                $('#mm').css({
                    'display': 'none'
                });

                $('#title-project-section').css({
                    'display': 'block'
                })
            })
        })

        //  minha visao

        $('#btn-mv').click(()=>{
            $('#mv').css({
                'display': 'flex'
            });

            $('#title-project-section').css({
                'display': 'none'
            })
        })
        $('.close').each((index, btn)=>{
            $(btn).click(()=>{
                $('#mv').css({
                    'display': 'none'
                });

                $('#title-project-section').css({
                    'display': 'block'
                })
            })
        })

        //  minha morte

        $('#btn-mmort').click(()=>{
            $('#mmort').css({
                'display': 'flex'
            });

            $('#title-project-section').css({
                'display': 'none'
            })
        })
        $('.close').each((index, btn)=>{
            $(btn).click(()=>{
                $('#mmort').css({
                    'display': 'none'
                });

                $('#title-project-section').css({
                    'display': 'block'
                })
            })
        })

        //  RIP

        $('#btn-rip').click(()=>{
            $('#rip').css({
                'display': 'flex'
            });

            $('#title-project-section').css({
                'display': 'none'
            })
        })
        $('.close').each((index, btn)=>{
            $(btn).click(()=>{
                $('#rip').css({
                    'display': 'none'
                });

                $('#title-project-section').css({
                    'display': 'block'
                })
            })
        })

        //  SOLIDAO

        $('#btn-so').click(()=>{
            $('#so').css({
                'display': 'flex'
            });

            $('#title-project-section').css({
                'display': 'none'
            })
        })
        $('.close').each((index, btn)=>{
            $(btn).click(()=>{
                $('#so').css({
                    'display': 'none'
                });

                $('#title-project-section').css({
                    'display': 'block'
                })
            })
        })

        //  Alma poetica

        $('#btn-ap').click(()=>{
            $('#ap').css({
                'display': 'flex'
            });

            $('#title-project-section').css({
                'display': 'none'
            })
        })
        $('.close').each((index, btn)=>{
            $(btn).click(()=>{
                $('ap').css({
                    'display': 'none'
                });

                $('#title-project-section').css({
                    'display': 'block'
                })
            })
        })

        //  Carta para Deus

        $('#btn-cd').click(()=>{
            $('#cd').css({
                'display': 'flex'
            });

            $('#title-project-section').css({
                'display': 'none'
            })
        })
        $('.close').each((index, btn)=>{
            $(btn).click(()=>{
                $('#cd').css({
                    'display': 'none'
                });

                $('#title-project-section').css({
                    'display': 'block'
                })
            })
        })

        //  Alma poetica

        $('#btn-ap').click(()=>{
            $('#ap').css({
                'display': 'flex'
            });

            $('#title-project-section').css({
                'display': 'none'
            })
        })
        $('.close').each((index, btn)=>{
            $(btn).click(()=>{
                $('#ap').css({
                    'display': 'none'
                });

                $('#title-project-section').css({
                    'display': 'block'
                })
            })
        })

        // meu rap

        $('#btn-mr').click(()=>{
            $('#mr').css({
                'display': 'flex'
            });

            $('#title-project-section').css({
                'display': 'none'
            })
        })
        $('.close').each((index, btn)=>{
            $(btn).click(()=>{
                $('#mr').css({
                    'display': 'none'
                });

                $('#title-project-section').css({
                    'display': 'block'
                })
            })
        })


         //  sem letra

        $('.sem-letra').each((index, music)=>{
            $(music).click(()=>{
                alert('letra indisponível. Consulte mais tarde')
            })
        })


        $('.ver-letra').each((index, btn)=>{
            const projectoPosY = document.getElementById('projectos').offsetTop - 100;
            $(btn).click(()=>{
                window.scrollTo(0,projectoPosY)
            })
        })
        
    
})