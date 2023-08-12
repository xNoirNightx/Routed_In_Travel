const { TravelDestination } = require('../models');

const travelseed = [

    {
        "destination_id": 1,
        "name": "Tokyo",
        "country": "Japan",
        "continent": "Asia",
        "image": "../../frontend/src/images/note-thanun--Rn42aCTZGw-unsplash.jpg",
        "description": "Tokyo is the capital of Japan. It is the center of the Greater Tokyo Area, and the most populous metropolitan area in the world. Also, I want to play arcade games.",
        "notes": " ",
        "visited": false
    },
    {
        "destination_id": 2,
        "name": "Petra",
        "country": "Jordan",
        "continent": "Asia",
        "image": "../../frontend/src/images/nick-name-VDSxhQ81d3M-unsplash.jpg",
        "description": "Petra is a historical and archaeological city in southern Jordan.",
        "notes": " ",
        "visited": false
    },
    {
        "destination_id": 3,
        "name": "Mont Saint-Michel",
        "country": "France",
        "continent": "Europe",
        "image": "../../frontend/src/images/dan-asaki-ZFZ5AyPg3rE-unsplash.jpg",
        "description": "Mont Saint-Michel is an island and mainland commune in Normandy, France.",
        "notes": " ",
        "visited": false
    },
    {
        "destination_id": 4,
        "name": "Berlin",
        "country": "Germany",
        "continent": "Europe",
        "image": "../../frontend/src/images/nick-name-VDSxhQ81d3M-unsplash.jpg",
        "description": "Berlin is the capital and largest city of Germany by both area and population.",
        "notes": "Went to Berlin for three days in 2009. Loved the city and would love to go back. Spend more time at Museumsinsel",
        "visited": true
    },
    {
        "destination_id": 5,
        "name": "London",
        "country": "England",
        "continent": "Europe",
        "image": "../../frontend/src/images/heidi-fin-QvPRGI8LfOc-unsplash.jpg",
        "description": "London is the capital and largest city of England and the United Kingdom. Despite covering a relatively small area compared to other cities, London is a very diverse city, while also being the center of a host of war crimes and colonialist atrocities.",
        "notes": " ",
        "visited": false
    },
    {
        "destination_id": 6,
        "name": "New York City",
        "country": "United States",
        "continent": "North America",
        "image": "../../frontend/src/images/times-square-nyc-city-new.jpg",
        "description": "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean.",

        "notes": "Went a few times, Broadway is always a hit (Wicked is a favorite). Look up Immersive Theatre, it's a great experience.",
        "visited": true
    },
    {
        "destination_id": 7,
        "name": "Chichen Itza",
        "country": "Mexico",
        "continent": "North America",
        "image": "../../frontend/src/images/marv-watson-UfK0P6WygEE-unsplash.jpg",
        "description": "Chichen Itza is a complex of Mayan ruins on Mexico's Yucatan Peninsula.",

        "notes": "Went to Mayan Riviera in 2006 as graduation trip. Went to Chichen Itza in killer heat. Would love to go back and see more of the ruins.",
        "visited": true
    },
    {
        "destination_id": 8,
        "name": "Angkor Wat",
        "country": "Cambodia",
        "continent": "Asia",
        "image": "../../frontend/src/images/angkor-wat-temple-amazing-seven-wonders-wonder.jpg",
        "description": "Angkor Wat is a temple complex in Cambodia and the largest religious monument in the world.",

        "notes": " ",
        "visited": false
    },
    {
        "destination_id": 9,
        "name": "San Fransisco",
        "country": "United States",
        "continent": "North America",
        "image": "https://pix4free.org/assets/library/2021-01-12/originals/san_francisco_california_city_street_houses_alcatraz.jpg",
        "description": " ",

        "notes": " ",
        "visited": false 
    },
    {
        "destination_id": 10,
        "name": "São Paulo",
        "country": "Brazil",    
        "continent": "South America",
        "image": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Skyline_of_S%C3%A3o_Paulo_at_dusk_%28318298%29.jpg",
        "description": "São Paulo, Brazil’s vibrant financial center, is among the world's most populous cities, with numerous cultural institutions and a rich architectural tradition.",

        "notes": " ",
        "visited": false
    },
    {
        "destination_id": 11,
        "name": "Rio de Janeiro",
        "country": "Brazil",
        "continent": "South America",
        "image": "https://c1.wallpaperflare.com/preview/663/777/300/rio-de-janeiro-brazil-city-urban.jpg",
        "description": "Rio de Janeiro is a huge seaside city in Brazil, famed for its Copacabana and Ipanema beaches, 38m Christ the Redeemer statue atop Mount Corcovado and for Sugarloaf Mountain, a granite peak with cable cars to its summit.",

        "notes": "Comes Soraia Recommended.",
        "visited": false
    },
    {
        "destination_id": 12,
        "name": "Cape Town",
        "country": "South Africa",
        "continent": "Africa",
        "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Aerial_View_of_Sea_Point%2C_Cape_Town_South_Africa.jpg",
        "description": "Cape Town is a port city on South Africa’s southwest coast, on a peninsula beneath the imposing Table Mountain.",

        "notes": " ",
        "visited": false
    },
    {
        "destination_id": 13,
        "name": "Seoul",
        "country": "South Korea",
        "continent": "Asia",
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/81/Seoul_%28175734251%29.jpeg",
        "description": "Seoul, the capital of South Korea, is a huge metropolis where modern skyscrapers, high-tech subways and pop culture meet Buddhist temples, palaces and street markets.",

        "notes": "Wanted to go to Seoul for a long time. Would love to go to tutor kids in English. Also, it's basically the future.",
        "visited": false
    },
    {
        "destination_id": 14,
        "name": "Hong Kong",
        "country": "China",
        "continent": "Asia",
        "image": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Hong_Kong_Harbour_Night_2019-06-11.jpg",
        "description": "Hong Kong is an autonomous territory, and former British colony, in southeastern China.",

        "notes": " ",
        "visited": false
    },
    {
        "destination_id": 15,
        "name": "Bangkok",
        "country": "Thailand",
        "continent": "Asia",
        "image": "https://cdn.destguides.com/files/store/itinerarystop/5831/background_image/webp_large_202112291737-d0fcd6e0dbef52739409b69082ca7b35.webp",
        "description": "Bangkok, Thailand’s capital, is a large city known for ornate shrines and vibrant street life.",

        "notes": " ",
        "visited": false
    },
    {
        "destination_id": 16,
        "name": "Singapore",
        "country": "Singapore",
        "continent": "Asia",
        "image": "https://live.staticflickr.com/8166/7637076872_fcb6fcdaa8_b.jpg",
        "description": "Singapore, an island city-state off southern Malaysia, is a global financial center with a tropical climate and multicultural population.",

        "notes": " ",
        "visited": false
    },
    {
        "destination_id": 17,
        "name": "Istanbul",
        "country": "Turkey",
        "continent": "Asia",
        "image": "https://live.staticflickr.com/4875/39926058353_5d096483cd_b.jpg",
        "description": "Istanbul is a major city in Turkey that straddles Europe and Asia across the Bosphorus Strait.",

        "notes": " ",
        "visited": false
    },
    {
        "destination_id": 18,
        "name": "Lausanne",
        "country": "Switzerland",
        "continent": "Europe",
        "image": "https://media.timeout.com/images/102876515/750/562/image.jpg",
        "description": "Lausanne is a city on Lake Geneva, in the French-speaking region of Vaud, Switzerland.",

        "notes": "Lake Leman was the setting for a scene in Mary Shelley's Frankenstein. Totally worth seeing in person. The Alps are beautiful and imposing.",
        "visited": true
    },
    {
        "destination_id": 19,
        "name": "Geneva",
        "country": "Switzerland",
        "continent": "Europe",
        "image": "https://upload.wikimedia.org/wikipedia/commons/c/c4/United_Nations_Geneva_2010-06-30.jpg",
        "description": "Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva).",

        "notes": "Wen to the UN and the Red Cross. The UN is a must see. The Red Cross is interesting, but not as much to see. Sad that they're relatively powerless in the grand scheme of things.",
        "visited": true
    },
    {
        "destination_id": 20,
        "name": "Toronto",
        "country": "Canada",
        "continent": "North America",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Toronto_-_ON_-_Skyline_bei_Nacht.jpg",
        "description": "Toronto, the capital of the province of Ontario, is a major Canadian city along Lake Ontario’s northwestern shore.",

        "notes": "Went a few times, CN Tower is tall. Best moment was seeing the Quentin Tarentino and Robert Rodriguez double feature Grindhouse. Samll theatre, but great experience.",
        "visited": true
    },
    {
        "destination_id": 21,
        "name": "Montreal",
        "country": "Canada",
        "continent": "North America",
        "image": "https://live.staticflickr.com/65535/48404293192_ac824f3de0_b.jpg",
        "description": "Montreal is the largest city in Canada's Québec province. It’s set on an island in the Saint Lawrence River and named after Mt. Royal, the triple-peaked hill at its heart.",

        "notes": "Lived there for a year. Ok city, good food, annoying Montreal Canadians fans.",
        "visited": true
    },
    {
        "destination_id": 22,
        "name": "Montreux",
        "country": "Switzerland",
        "continent": "Europe",
        "image": "https://freerangestock.com/sample/115131/freddie-mercury-bronze-statue-montreux-switzerland.jpg",
        "description": "Montreux is a traditional resort town on Lake Geneva. Nestled between steep hills and the lakeside, it's known for its mild microclimate and the Montreux Jazz Festival, held in July.",

        "notes": "Also known for it's castle, Chillon. It's a beautiful castle and Byron apparently carved his name into the wall. Freddie Mercury lived in Montreux and there's a statue of him on the lake. Victory pose.",
        "visited": true
    },
    {
        "destination_id": 23,
        "name": "Reykjavik",
        "country": "Iceland",
        "continent": "Europe",
        "image": "https://c1.wallpaperflare.com/preview/95/197/66/building-architecture-city-town.jpg",
        "description": "Reykjavik, on the coast of Iceland, is the country's capital and largest city.",

        "notes": " ",
        "visited": false
    },
    {
        "destination_id": 24,
        "name": "Oslo",
        "country": "Norway",
        "continent": "Europe",
        "image": "https://upload.wikimedia.org/wikipedia/commons/c/ce/2010-10-25_Oslo.jpg",
        "description": "Oslo, the capital of Norway, sits on the country’s southern coast at the head of the Oslofjord.",

        "notes": " ",
        "visited": false
    },
    {
        "destination_id": 25,
        "name": "Bodleian Library",
        "country": "England",
        "continent": "Europe",
        "image": "https://live.staticflickr.com/8626/16616943869_184f2d3185_b.jpg",
        "description": "The Bodleian Library is the main research library of the University of Oxford, and is one of the oldest libraries in Europe.",

        "notes": "All the books!!!",
        "visited": false
    },
    {
        "destination_id": 26,
        "name": "Stonehenge",
        "country": "England",
        "continent": "Europe",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/15/Stonehenge_%28213671879%29.jpeg",
        "description": "Stonehenge is a prehistoric monument in Wiltshire, England, 2 miles west of Amesbury and 8 miles north of Salisbury.",

        "notes": "Mystery or rocks? Who knows. Still cool.",
        "visited": false
    },
    {
        "destination_id": 27,
        "name": "The Louvre",
        "country": "France",
        "continent": "Europe",
        "image": "https://upload.wikimedia.org/wikipedia/commons/6/66/Louvre_Museum_Wikimedia_Commons.jpg",
        "description": "The Louvre or the Louvre Museum is the world's largest museum and a historic monument in Paris, France.",

        "notes": "Mona Lisa is smaller than you think. The Louvre is huge. The glass looks cool.",
        "visited": false
    },
    {
        "destination_id": 28,
        "name": "Disney World",
        "country": "USA",
        "continent": "North America",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Walt_Disney_World%27s_Cinderella_Castle_in_2021.png",
        "description": "The Walt Disney World Resort is an entertainment complex in Bay Lake and Lake Buena Vista, Florida, near Orlando and Kissimmee, Florida.",

        "notes": "It's Disney World. It's fun. It's expensive. It's crowded. It's Disney World.",
        "visited": false
    },
    {
        "destination_id": 29,
        "name": "Disneyland",
        "country": "USA",
        "continent": "North America",
        "image": "https://live.staticflickr.com/6131/5921485502_f4572338bb_b.jpg",
        "description": "Disneyland Park, originally Disneyland, is the first of two theme parks built at the Disneyland Resort in Anaheim, California, opened on July 17, 1955.",

        "notes": "It's Disneyland. It's fun. It's expensive. It's crowded. It's Disneyland.",
        "visited": false
    },
    {
        "destination_id": 30,
        "name": "Universal Studios",
        "city": "Orlando",
        "country": "USA",
        "continent": "North America",
        "image": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Wizarding_World_of_Harry_Potter_Castle.jpg",
        "description": "Universal Studios Florida is a theme park located in Orlando, Florida. Opened on June 7, 1990, the park's theme is the entertainment industry, in particular movies and television.",

        "notes": "I just want to go to Happy Potter World. Also Galaxy's Edge.",
        "visited": false
    },
    {
        "destination_id": 31,
        "name": "Library of Alexandria",
        "country": "Egypt",
        "continent": "Africa",
        "image": "https://images.rawpixel.com/image_social_landscape/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEyL2xyL3VtZXN2a2duemcxMjQzLWltYWdlLmpwZw.jpg",
        "description": "The Royal Library of Alexandria or Ancient Library of Alexandria in Alexandria, Egypt, was one of the largest and most significant libraries of the ancient world.",

        "notes": "It's gone. It's not coming back. It's a shame.",
        "visited": false
    },
    {
        "destination_id": 32,
        "name": "The Great Wall of China",
        "country": "China",
        "continent": "Asia",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/10/20090529_Great_Wall_8185.jpg",
        "description": "The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials, generally built along an east-to-west line across the historical northern borders of China.",

        "notes": " ",
        "visited": false
    },
    {
        "destination_id": 33,
        "name": "The Colosseum",
        "country": "Italy",
        "continent": "Europe",
        "image": "https://upload.wikimedia.org/wikipedia/commons/5/53/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg",
        "description": "The Colosseum or Coliseum, also known as the Flavian Amphitheatre, is an oval amphitheatre in the centre of the city of Rome, Italy.",

        "notes": " ",
        "visited": false
    },
    {
        "destination_id": 34,
        "name": "The Parthenon",
        "country": "Greece",
        "continent": "Europe",
        "image": "https://www.worldhistory.org/uploads/images/943.jpg",
        "description": "The Parthenon is a former temple on the Athenian Acropolis, Greece, dedicated to the goddess Athena, whom the people of Athens considered their patron.",

        "notes": " ",
        "visited": false
    },
    {
        "destination_id": 35,
        "name": "The Pyramids of Giza",
        "country": "Egypt",
        "continent": "Africa",
        "image": "https://www.worldhistory.org/uploads/images/5687.jpg",
        "description": "The Giza pyramid complex is an archaeological site on the Giza Plateau, on the outskirts of Cairo, Egypt.",

        "notes": " ",
        "visited": false
    },
    {
        "destination_id": 36,
        "name": "The Taj Mahal",
        "country": "India",
        "continent": "Asia",
        "image": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg",
        "description": "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra.",

        "notes": " ",
        "visited": false
    },
    {
        "destination_id": 37,
        "name": "Kerala Backwaters",
        "country": "India",
        "continent": "Asia",
        "image": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Kerala_Backwaters%2C_India.JPG",
        "description": "The Kerala backwaters are a chain of brackish lagoons and lakes lying parallel to the Arabian Sea coast of Kerala state in southern India.",

        "notes": " ",
        "visited": false
    },
    {
        "destination_id": 38,
        "name": "The Great Barrier Reef",
        "country": "Australia",
        "continent": "Australia",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Great_Barrier_Reef%2C_Australia.jpg",
        "description": "The Great Barrier Reef is the world's largest coral reef system composed of over 2,900 individual reefs and 900 islands stretching for over 2,300 kilometres over an area of approximately 344,400 square kilometres.",

        "notes": " ",
        "visited": false
    },
    {
        "destination_id": 39,
        "name": "The Grand Canyon",
        "country": "USA",
        "continent": "North America",
        "image": "https://upload.wikimedia.org/wikipedia/commons/6/63/Grand_Canyon_from_Pima_Point_2010.jpg",
        "description": "The Grand Canyon is a steep-sided canyon carved by the Colorado River in Arizona, United States.",

        "notes": " ",
        "visited": false
    },
    {
        "destination_id": 40,
        "name": "Mumbai",
        "country": "India",
        "continent": "Asia",
        "image": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Mumbai_skyline_at_night.jpg",
        "description": "Mumbai is the capital city of the Indian state of Maharashtra.",

        "notes": " ",
        "visited": false
    },
    {
        "destination_id": 41,
        "name": "Kilimanjaro",
        "country": "Tanzania",
        "continent": "Africa",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/19/Mount_Kilimanjaro.jpg",
        "description": "Kilimanjaro, with its three volcanic cones, Kibo, Mawenzi, and Shira, is a dormant volcano in Tanzania.",

        "notes": " ",
        "visited": false
    },
    {
        "destination_id": 42,
        "name": "Marrakech",
        "country": "Morocco",
        "continent": "Africa",
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Marrakech_Medina_%28by_Pudelek%29_01.jpg",
        "description": "Marrakesh is a major city of the Kingdom of Morocco.",

        "notes": " ",
        "visited": false
    },
    {
        "destination_id": 43,
        "name": "Johannesburg",
        "country": "South Africa",
        "continent": "Africa",
        "image": "https://upload.wikimedia.org/wikipedia/commons/7/7d/JohannesburgMontage.jpg",
        "description": "Johannesburg, informally known as Jozi, Joburg, or The City of Gold, is the largest city in South Africa.",

        "notes": " ",
        "visited": false
    },
    {
        "destination_id": 44,
        "name": "Machu Picchu",
        "country": "Peru",
        "continent": "South America",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/15/Machu_Picchu%2C_Peru.jpg",
        "description": "Machu Picchu is a 15th-century Inca citadel situated on a mountain ridge 2,430 metres above sea level.",

        "notes": " ",
        "visited": false
    },
    {
        "destination_id": 45,
        "name": "Casablanca",
        "country": "Morocco",
        "continent": "Africa",
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Casablanca_Mosque.jpg",
        "description": "Casablanca is the largest city of Morocco.",

        "notes": " ",
        "visited": false
    },
    {
        "destination_id": 46,
        "name": "Victoria Falls",
        "country": "Zimbabwe",
        "continent": "Africa",
        "image": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Victoria_Falls%2C_Zimbabwe_%2816_June_2009%29.jpg",
        "description": "Victoria Falls is a waterfall on the Zambezi River in southern Africa, which provides habitat for several unique species of plants and animals.",

        "notes": " ",
        "visited": false
    },
    {
        "destination_id": 47,
        "name": "Zanzibar",
        "country": "Tanzania",
        "continent": "Africa",
        "image": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Zanzibar%2C_Tanzania.jpg",
        "description": "Zanzibar is a semi-autonomous region of Tanzania.",

        "notes": " ",
        "visited": false
    },
    {
        "destination_id": 48,
        "name": "Chobe National Park",
        "country": "Botswana",
        "continent": "Africa",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Chobe_National_Park%2C_Botswana_%282%29.jpg",
        "description": "Chobe National Park, in northwest Botswana, has one of the largest concentrations of game in Africa.",

        "notes": " ",
        "visited": false
    },
    {
        "destination_id": 49,
        "name": "The Nile",
        "country": "Egypt",
        "continent": "Africa",
        "image": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Nile_River_and_delta_from_orbit.jpg",
        "description": "The Nile is a major north-flowing river in northeastern Africa, and is commonly regarded as the longest river in the world.",

        "notes": " ",
        "visited": false
    },
    {
        "destination_id": 50,
        "name": "The Serengeti",
        "country": "Tanzania",
        "continent": "Africa",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/4d/Serengeti_Landscape.jpg",
        "description": "The Serengeti ecosystem is a geographical region in Africa, spanning northern Tanzania.",

        "notes": " ",
        "visited": false
    },
    {
        "destination_id": 51,
        "name": "Nairobi",
        "country": "Kenya",
        "continent": "Africa",
        "image": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Nairobi_skyline.jpg",
        "description": "Nairobi is the capital and the largest city of Kenya.",

        "notes": " ",
        "visited": false
    },
    {
        "destination_id": 52,
        "name": "Iqaluit",
        "country": "Canada",
        "continent": "North America",
        "image": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Iqaluit_Airport.jpg",
        "description": "Iqaluit is the capital of the Canadian territory of Nunavut.",

        "notes": " ",
        "visited": false
    },
    {
        "destination_id": 53,
        "name": "Whitehorse",
        "country": "Canada",
        "continent": "North America",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Whitehorse_Yukon.jpg",
        "description": "Whitehorse is the capital and only city of Yukon, and the largest city in northern Canada.",

        "notes": " ",
        "visited": false
    },
    {
        "destination_id": 54,
        "name": "Alexandria",
        "Country": "Egypt",
        "continent": "Africa",
        "image": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Alexandria_Corniche.jpg",
        "description": "Alexandria is the second largest city and a major economic centre in Egypt.",

        "notes": "Whyyy library, whyyyyyy?",
        "visited": false
    },
];

const seedTravel = () => TravelDestination.bulkcreate(travelseed);

module.exports = seedTravel;