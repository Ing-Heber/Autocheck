export const strings = {
    // Navigation Bar
    navbar: {
        logo: "Autocheck",
        links: {
            home: "Inicio",
            about: "Nosotros",
            locations: "Ubicaciones",
            partners: "Socios"
        },
        ariaLabels: {
            navbar: "Barra de navegación principal",
            logo: "Ir a la página principal",
            homeLink: "Ir al inicio",
            aboutLink: "Ir a la página Nosotros",
            locationsLink: "Ir a la sección de ubicaciones",
            partnersLink: "Ir a la página de nuestros socios",
            mobileMenuToggle: "Abrir/cerrar menú móvil",
            mobileMenuOpen: "Abrir menú móvil",
            mobileMenuClose: "Cerrar menú móvil",
            mobileMenuPanel: "Menú de navegación móvil",
            mobileSocialLinks: "Redes sociales de Autocheck en menú móvil"
        }
    },

    // About / Nosotros Page
    about: {
        heroTitle: "Nuestra historia, tu confianza en cada servicio",
        heroDescription: "En Autocheck llevamos más de 30 años acompañando a conductores de Colima con productos y servicio técnico profesional para proteger el rendimiento de sus vehículos.",
        storyTitle: "Quiénes somos",
        imageAlt: "Historia de Autocheck",
        storyParagraphs: [
            "Nacimos con una misión clara: ofrecer soluciones automotrices confiables, accesibles y con atención humana.",
            "Hoy combinamos marcas líderes en lubricantes, filtros y bujías con un equipo capacitado que te asesora según las necesidades reales de tu auto.",
            "Nos enfocamos en relaciones de largo plazo: servicio honesto, tiempos claros y calidad constante en cada visita."
        ],
        mapTitle: "Encuentra tu sucursal más cercana",
        mapDescription: "Selecciona una ubicación para ver el mapa, teléfonos y opciones de contacto.",
        ctaTitle: "¿Quieres atención personalizada para tu vehículo?",
        ctaDescription: "Compártenos tus datos y te ayudamos a elegir el servicio o producto ideal.",
        ctaButton: "Ir al formulario",
        ariaLabels: {
            storySection: "Sección con la historia de Autocheck",
            mapIntro: "Introducción a la sección de ubicaciones",
            ctaSection: "Sección con llamada a la acción hacia el formulario",
            ctaButton: "Ir al formulario de contacto"
        }
    },

    // Hero Section
    hero: {
        firstImage: {
            title: "Rendimiento y protección para tu vehículo",
            titleHighlight: "",
            description: "En Autocheck combinamos productos líderes en el mercado con servicio técnico profesional para garantizar el mejor desempeño de tu motor.",
            ctaButton: "Agenda tu servicio",
            ariaLabels: {
                heroSection: "Imagen principal con la oferta de servicios",
                ctaButton: "Reserva tu cita de servicio automotriz"
            }
        },
        secondImage: {
            title: "Potencia que se siente.\nProtección que perdura",
            titleHighlight: "",
            description: "TotalEnergies Quartz instalados por expertos en Autocheck para un rendimiento superior en cada kilómetro.",
            ctaButton: "Agenda tu servicio",
            ariaLabels: {
                heroSection: "Imagen secundaria que muestra total energies como producto líder en el mercado",
                ctaButton: "Reserva tu cita de servicio automotriz"
            }
        },
        thirdImage: {
            title: "Amplia variedad en\naceites y filtros",
            titleHighlight: "",
            description: "Trabajamos con marcas líderes como TotalEnergies, Motul, Raloy, WIX y MANN FILTER para garantizar el mejor rendimiento de tu vehículo.",
            ctaButton: "Descubre nuestros productos",
            ariaLabels: {
                heroSection: "Imagen de rack con una amplia variedad de productos para aceite y filtros de marcas Total energies, Motul, Raloy, WIX y MANN FILTER.",
                ctaButton: "Descubre nuestros productos"
            }
        }
    },

    // Services Section
    services: {
        sectionTitle: "Nuestros Servicios Principales",
        items: {
            oilChange: {
                title: "Cambio de Aceite Profesional",
                description: "Protege tu motor contra el desgaste y prolonga su vida útil con aceites certificados instalados por técnicos especializados.",
                icon: "🛢️"
            },
            airFilter: {
                title: "Filtro de Aire de Alto Rendimiento",
                description: "Mejora la eficiencia de combustible y el desempeño del motor con filtros premium que optimizan la entrada de aire limpio.",
                icon: "🌬️"
            },
            sparkPlug: {
                title: "Las mejores Bujías",
                description: "Logra una combustión más eficiente y mayor potencia con bujías de alto rendimiento instaladas por expertos.",
                icon: "⚡"
            }
        },
        ariaLabels: {
            servicesSection: "Nuestros servicios automotrices principales",
            serviceCard: "Tarjeta de información de servicio"
        }
    },

    // Products Section
    products: {
        sectionTitle: "Productos Populares",
        items: {
            mobilOil: {
                image: {
                    url: "/images/aceite-mobil-5-30-sintetico.jpg",
                    alt: "Aceite Mobil 1 5W-30"
                },
                name: "Mobil 1 5W-30",
                type: "Aceite Completamente Sintético",
            },
            mannAirFilter: {
                image: {
                    url: "/images/mann-air-filter.jpg",
                    alt: "Filtro de Aire Mann 100L"
                },
                name: "Filtro de Aire Bosch",
                type: "Filtro de Rendimiento",
            },
            ngkSparkPlug: {
                image: {
                    url: "/images/bujia-iridium-ngk.jpg",
                    alt: "Filtro de Aire Mann 100L"
                },
                name: "Bujía de Iridio NGK",
                type: "Alto Rendimiento",
            }
        },
        addToCartButton: "Agregar al Carrito",
        ariaLabels: {
            productsSection: "Productos automotrices populares",
            productCard: "Información del producto y opción de compra",
            productImage: "Imagen del producto",
            addToCartButton: "Agregar producto al carrito de compras"
        }
    },

    // Locations Section
    locations: {
        sectionTitle: "Nuestras Ubicaciones",
        addressLabel: "Dirección:",
        scheduleLabel: "Horario:",
        phonesLabel: "Teléfonos:",
        socialMediaLabel: "Síguenos:",
        callButton: "Llamar",
        visitButton: "Visitar",
        socialMedia: {
            facebook: "Facebook",
            googleMaps: "Ver en Maps",
            whatsapp: "WhatsApp"
        },
        ariaLabels: {
            locationsSection: "Nuestras ubicaciones y puntos de servicio",
            locationCard: "Información de ubicación y contacto",
            callButton: "Llamar a esta ubicación",
            visitButton: "Obtener direcciones a esta ubicación",
            facebookButton: "Visitar página de Facebook",
            googleMapsButton: "Ver ubicación en Google Maps",
            whatsappButton: "Contactar por WhatsApp"
        }
    },

    // How It Works Section
    howItWorks: {
        sectionTitle: "Cómo Funciona",
        steps: [
            "Reserva tu cita",
            "Visita nuestro taller",
            "Disfruta del servicio profesional"
        ],
        ariaLabels: {
            howItWorksSection: "Cómo funciona nuestro proceso de servicio",
            stepCard: "Paso del proceso de servicio"
        }
    },

    // Testimonials Section
    testimonials: {
        sectionTitle: "Lo que Dicen Nuestros Clientes",
        items: {
            carlos: {
                name: "Carlos M.",
                quote: "¡Reservé mi cambio de aceite en línea y el servicio en el taller fue rápido, profesional y económico!"
            },
            dianaS: {
                name: "Diana S.",
                quote: "Los empleados son muy amables, te tratan con respecto y hasta me ofrecieron pasar a lavarme las manos ya que había cargado una batería y probablemente tenía ácido, se agradece mucho el gesto de amabilidad, muy buenos precios y atención."
            },
            jessica: {
                name: "Jessica L.",
                quote: "¡Excelente atención en el taller. Cambiaron mi filtro y bujías de manera eficiente. ¡Muy recomendado!"
            },
            luisBarba: {
                name: "Luis B.",
                quote: "Gente con experiencia te atiende y te ayudan de forma rápida. Tienen buen surtidos de refacciones"
            }
        },
        ariaLabels: {
            testimonialsSection: "Testimonios y reseñas de clientes",
            testimonialCard: "Testimonio de cliente"
        }
    },

    // CTA Section
    cta: {
        title: "¿Listo para tu próximo cambio de aceite?",
        description: "Reserva tu cita ahora y visita nuestro taller para recibir servicio profesional.",
        ctaButton: "Reservar Cita",
        ariaLabels: {
            ctaSection: "Sección de llamada a la acción para reservar servicios",
            ctaButton: "Reserva tu cita de servicio ahora"
        }
    },

    homePartnersCta: {
        title: "Conoce a las marcas que respaldan cada servicio",
        description: "Descubre a nuestros socios comerciales y las marcas líderes\ncon las que trabajamos para ofrecerte calidad,\nconfianza y rendimiento en tu vehículo.",
        button: "Nuestros socios",
        ariaLabels: {
            section: "Sección de invitación para conocer a los socios de Autocheck",
            button: "Ir a la página de socios de Autocheck"
        }
    },

    // Partners Page
    partners: {
        title: "Conoce nuestros socios",
        subtitle: "En Autocheck trabajamos con marcas líderes para ofrecerte máxima calidad, desempeño confiable y protección en cada servicio.",
        brands: [
            "TotalEnergies",
            "Bosch",
            "WIX",
            "Loctite",
            "Motul",
            "Mann Filter",
            "Denso",
            "Raloy",
            "Purolator"
        ],
        details: [
            {
                trademark: "TotalEnergies",
                description: "Lubricantes de alta tecnología diseñados para proteger motores en condiciones exigentes, con soluciones para autos, motos y transporte.",
                benefit: "Ofrece máxima protección y rendimiento, ayudando a alargar la vida útil del motor."
            },
            {
                trademark: "Bosch",
                description: "Fabricante líder mundial de autopartes, especializado en sistemas automotrices, sensores y componentes de alta precisión.",
                benefit: "Calidad de equipo original (OEM) y alta confiabilidad en sistemas críticos del vehículo."
            },
            {
                trademark: "WIX Filters",
                description: "Especialistas en filtración automotriz, incluyendo filtros de aceite, aire, combustible y cabina.",
                benefit: "Garantiza filtración eficiente y mayor durabilidad del motor."
            },
            {
                trademark: "Loctite",
                description: "Marca líder en adhesivos, selladores y fijadores utilizados en aplicaciones automotrices e industriales.",
                benefit: "Asegura sellado perfecto y fijación profesional, evitando fugas y fallas mecánicas."
            },
            {
                trademark: "Motul",
                description: "Fabricante global de lubricantes de alto rendimiento, reconocido en el mundo del automovilismo.",
                benefit: "Brinda máximo desempeño y tecnología avanzada para motores exigentes."
            },
            {
                trademark: "MANN FILTER",
                description: "Empresa especializada en sistemas de filtración para aceite, aire, combustible y cabina.",
                benefit: "Ofrece protección superior del motor con estándares de calidad alemana."
            },
            {
                trademark: "DENSO",
                description: "Compañía global que desarrolla autopartes avanzadas como bujías, sensores y sistemas electrónicos.",
                benefit: "Tecnología de última generación con alto rendimiento y precisión."
            },
            {
                trademark: "Raloy",
                description: "Marca mexicana de lubricantes automotrices enfocada en rendimiento y sostenibilidad.",
                benefit: "Excelente relación calidad-precio para el mantenimiento confiable del vehículo."
            },
            {
                trademark: "Purolator",
                description: "Fabricante reconocido de filtros automotrices con amplia trayectoria en el mercado.",
                benefit: "Confiabilidad comprobada en la protección del motor y sistemas de filtración."
            }
        ],
        cta: {
            title: "Confía en productos de calidad",
            primary: "Agenda tu servicio",
            secondary: "Ver servicios"
        },
        modal: {
            trigger: "Ver detalles",
            close: "Cerrar",
            benefitLabel: "Beneficio principal"
        },
        ariaLabels: {
            pageMain: "Página de socios de Autocheck",
            section: "Sección de marcas socias de Autocheck",
            logosGrid: "Cuadrícula de logos de marcas socias",
            ctaSection: "Sección de llamada a la acción para agendar servicio",
            primaryButton: "Agendar un servicio automotriz",
            secondaryButton: "Ver servicios disponibles",
            detailButton: "Abrir detalles de la marca",
            detailModal: "Detalle de marca socia",
            closeModal: "Cerrar detalle de marca"
        },
        logoAltPrefix: "Logo de"
    },

    // Form Section
    form: {
        sectionTitle: "Envíanos un mensaje",
        sectionDescription: "Si tienes alguna duda o necesitas una cotización especial, no dudes en contactarnos. Estamos listos para ayudarte.",
        fields: {
            name: "Nombre completo",
            email: "Correo electrónico",
            phone: "Teléfono",
            message: "Mensaje",
            placeholder: {
                name: "Ingresa tu nombre",
                email: "ejemplo@correo.com",
                phone: "123-456-7890",
                message: "¿Cómo podemos ayudarte?"
            }
        },
        submitButton: "Enviar Mensaje",
        successMessage: "¡Gracias! Tu mensaje ha sido enviado correctamente.",
        imageAlt: "Técnico trabajando en un vehículo",
        ariaLabels: {
            formSection: "Sección de contacto con formulario",
            nameInput: "Campo para ingresar nombre completo",
            emailInput: "Campo para ingresar correo electrónico",
            phoneInput: "Campo para ingresar número telefónico",
            messageInput: "Campo para ingresar mensaje o consulta",
            submitButton: "Botón para enviar el formulario de contacto"
        }
    },

    // Footer
    footer: {
        brand: {
            title: "Autocheck",
            description: "Mantenimiento automotriz confiable con aceites, filtros y bujías de calidad para cuidar el rendimiento de tu vehiculo."
        },
        locations: {
            title: "Ubicaciones",
            items: [
                {label: "Autocheck Manzanillo", href: "#manzanillo"},
                {label: "Autocheck Tecoman", href: "#tecoman"},
                {label: "Autocheck Villa de Alvarez", href: "#villa"},
                {label: "Autocheck Tecnologico", href: "#tecnologico"},
                {label: "Autocheck Cuauhtemoc", href: "#cuauhtemoc"}
            ]
        },
        social: {
            title: "Redes",
            items: [
                {label: "Facebook", href: "https://www.facebook.com/autocheckdetecoman", platform: "facebook"},
                {label: "Instagram", href: "https://www.instagram.com/autocheckautocheck", platform: "instagram"},
                // {label: "WhatsApp", href: "https://wa.me/5210000000000", platform: "whatsapp"}
            ]
        },
        copyright: "© 2026 Autocheck — Todos los derechos reservados.",
        ariaLabels: {
            footer: "Pie de pagina del sitio web",
            locationLink: "Enlace a ubicacion de sucursal",
            socialLink: "Enlace a red social de Autocheck"
        }
    },

    // Common/Shared Strings
    common: {
        buttons: {
            bookService: "Reserva tu Servicio",
            bookNow: "Reservar Cita",
            addToCart: "Agregar al Carrito",
            learnMore: "Saber Más",
            getStarted: "Comenzar"
        },
        loading: "Cargando...",
        error: "Algo salió mal. Por favor intenta de nuevo.",
        success: "¡Éxito!"
    }
};
