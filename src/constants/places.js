const places = [
    {
        image: require('../assets/places/1.png'),
        name: 'Merkur Mountain',
        country: 'Germany',
        coordinates: [{ lat: 48.5056, lng: 8.4133 }],
        description: 'Merkur Mountain, located in the Black Forest, is one of the lower peaks in the region, standing at 1,163 meters. Despite its modest size, it offers panoramic views and attracts hikers and climbers of all levels. The mountain is also famous for the Merkur Tower at the summit, providing a sweeping view of the surrounding landscape. It’s an ideal spot for beginner mountaineers looking for an accessible challenge.',
        route: [
            {
                title: 'Starting Point',
                description: 'The trailhead begins at the Merkurbahn (Merkur Railway) station, where climbers can either start by foot or take the Merkurbahn railway up to a certain point.'
            },
            {
                title: 'First Section',
                description: 'The main path starts from a wide, paved road that takes you through the woods. This section is easy and gradual, ideal for warming up.'
            },
            {
                title: 'Intermediate Section',
                description: 'As you ascend, the path narrows and turns into a forest trail, which is slightly steeper. There will be markers along the way for direction.'
            },
            {
                title: 'Summit Section',
                description: 'In the final stretch, the trail becomes rockier, requiring careful footing. Here, the views start opening up, and it becomes more scenic as you approach the summit.'
            },
            {
                title: 'At the Top',
                description: 'Upon reaching the top, the Merkur Tower awaits, offering a 360-degree view of the Black Forest and surrounding areas.'
            }
        ],
        tip: 'Wear comfortable hiking boots with good grip. In the winter, the trail can be icy, so bring trekking poles for stability. Always check the weather forecast before heading out.',
        achievement: [
            {
                title: 'Summit of Merkur',
                name: 'Conquer Merkur Mountain, Germany',
                description: 'You’ve reached the top of Merkur! A well-earned achievement, congratulations on conquering this iconic peak!'
            }
        ]
    },
    {
        image: require('../assets/places/2.png'),
        name: 'Mont Blanc',
        country: 'France/Italy',
        coordinates: [{ lat: 45.8326, lng: 6.8652 }],
        description: 'Mont Blanc, towering at 4,808 meters, is the highest peak in the Alps and one of the most famous mountains in the world. Known for its challenging conditions and technical routes, it draws experienced mountaineers from around the globe. The summit offers breathtaking views of the French and Italian Alps.',
        route: [
            {
                title: 'Starting Point',
                description: 'The typical ascent begins from Chamonix, France, taking the Aiguille du Midi cable car to an elevation of 3,842 meters.'
            },
            {
                title: 'Approach to the Gouter Refuge',
                description: 'From the Aiguille du Midi, climbers head to the Gouter Refuge. This part of the climb takes approximately 4-6 hours and includes steep snow slopes and rocky terrain.'
            },
            {
                title: 'Climb to the Summit',
                description: 'From the Gouter Refuge, the ascent becomes more technical. Climbers cross glaciers, handle crevasses, and climb rocky sections up to the summit ridge. The climb typically takes between 6-8 hours.'
            },
            {
                title: 'Summit Ridge',
                description: 'At 4,800 meters, the last section involves ascending a snow and rock ridge to the summit of Mont Blanc. The view from the top is unparalleled, offering views across the Alps and down to the valleys below.'
            },
            {
                title: 'Descent',
                description: 'The descent follows the same route, with additional caution required due to snow and ice conditions. The Gouter Refuge serves as a crucial rest stop on the way down.'
            }
        ],
        tip: 'Acclimatization is key to prevent altitude sickness. Ensure you\'re physically prepared for a multi-day climb with sufficient provisions. Carry a full range of technical equipment, including ice axes, crampons, and ropes.',
        achievement: [
            {
                title: 'Mont Blanc Master',
                name: 'Conquer Mont Blanc, France/Italy',
                description: 'Congratulations on summiting Mont Blanc! You’ve conquered the highest peak in Western Europe!'
            }
        ]
    },
    {
        image: require('../assets/places/3.png'),
        name: 'Mount Everest',
        country: 'Nepal/China',
        coordinates: [{ lat: 27.9881, lng: 86.9250 }],
        description: 'Mount Everest, the tallest peak on Earth at 8,848 meters, is a coveted goal for mountaineers worldwide. Reaching the summit is a significant achievement, but the climb is extremely dangerous due to its altitude, weather, and technical challenges.',
        route: [
            {
                title: 'Starting Point',
                description: 'The trek begins with a flight to Lukla, followed by a multi-day trek to Everest Base Camp, located at an altitude of 5,364 meters. The trek itself is scenic but physically demanding, and acclimatization is important.'
            },
            {
                title: 'Base Camp',
                description: 'Upon reaching Base Camp, climbers take a few days to rest and acclimatize. Several rounds of climbing and descending occur to aid the body’s adjustment to higher altitudes.'
            },
            {
                title: 'Khumbu Icefall',
                description: 'From Base Camp, the climb proceeds through the treacherous Khumbu Icefall. It is one of the most dangerous sections, with unstable ice and deep crevasses.'
            },
            {
                title: 'Camp I (6,065 meters)',
                description: 'After navigating the Icefall, climbers reach Camp I. The route from here includes steep ascents and rocky terrain, followed by a section of glacier crossing.'
            },
            {
                title: 'Camp II and III (6,400–7,400 meters)',
                description: 'Camp II is on the Lhotse Face, followed by a steep, vertical ascent to Camp III. The oxygen levels are thin at this point, making breathing difficult.'
            },
            {
                title: 'Summit Push',
                description: 'The final push involves traversing the South Col, followed by a ridge to the summit. At 8,848 meters, climbers will experience extreme cold and reduced oxygen.'
            },
            {
                title: 'Descent',
                description: 'Climbers descend via the same route, making it a two-week endeavor at a minimum.'
            }
        ],
        tip: 'Acclimatization is absolutely crucial for survival, and it’s recommended to ascend slowly and climb high but sleep low. Oxygen supplementation is often necessary above 8,000 meters.',
        achievement: [
            {
                title: 'Everest Victorious',
                name: 'Conquer Mount Everest, Nepal/Tibet',
                description: 'You’ve made it to the top of Mount Everest! The highest point on Earth is now a part of your incredible journey.'
            }
        ]
    },
    {
        image: require('../assets/places/4.png'),
        name: 'Mount Fuji',
        country: 'Japan',
        coordinates: [{ lat: 35.3606, lng: 138.7274 }],
        description: 'Mount Fuji, Japan\'s iconic volcano, stands at 3,776 meters and is a revered peak. It is a sacred mountain and is frequently climbed by both pilgrims and tourists. The mountain is accessible to beginners but can present challenges at higher elevations.',
        route: [
            {
                title: 'Starting Point',
                description: 'The climb typically begins from the 5th Station, the highest point accessible by vehicle. From here, climbers ascend along marked paths through forests and volcanic terrain.'
            },
            {
                title: 'First Section',
                description: 'The path gradually steepens as you pass through dense vegetation and volcanic rock fields. The terrain is rocky but manageable.'
            },
            {
                title: 'Midway Section',
                description: 'This section involves a mix of volcanic ash and gravel paths, requiring careful footing. As altitude increases, the air becomes thinner.'
            },
            {
                title: 'Summit Section',
                description: 'The last part of the climb is challenging, with sections of rock scrambling and steep inclines. Once near the summit, a rocky ridge leads directly to the crater rim.'
            },
            {
                title: 'At the Summit',
                description: 'The summit offers spectacular views, including the famed crater and Mt. Fuji\'s signature shape. There are several shrines at the top.'
            }
        ],
        tip: 'The weather can change quickly, so bring a jacket, gloves, and proper hiking shoes. It\'s also common to climb overnight in order to watch the sunrise from the summit.',
        achievement: [
            {
                title: 'Mount Fuji Climber',
                name: 'Conquer Mount Fuji, Japan',
                description: 'Congratulations! You’ve reached the summit of Mount Fuji, a symbol of Japan’s beauty and strength.'
            }
        ]
    },
    {
        image: require('../assets/places/5.png'),
        name: 'Mount Kilimanjaro',
        country: 'Tanzania',
        coordinates: [{ lat: -3.0674, lng: 37.3556 }],
        description: 'Kilimanjaro is the highest mountain in Africa, standing at 5,895 meters. The climb is non-technical, making it accessible to climbers with moderate experience. However, the altitude presents significant challenges.',
        route: [
            {
                title: 'Starting Point',
                description: 'Climbers usually begin the trek at the Machame Gate, which leads to the Machame Route.'
            },
            {
                title: 'Machame Route',
                description: 'This is the most popular route, taking climbers through diverse ecosystems, from lush rainforest to alpine desert. It includes several campgrounds, with acclimatization built into the schedule.'
            },
            {
                title: 'Barafu Camp (4,640 meters)',
                description: 'The final campsite before summit day, where climbers rest and prepare for the summit push. The night is spent here, with the climb to the summit beginning at midnight.'
            },
            {
                title: 'Summit Push',
                description: 'Climbers ascend via a steep, rocky path to the summit, taking about 6-8 hours.'
            },
            {
                title: 'Descent',
                description: 'The descent follows the Mweka Route, which is easier than the ascent.'
            }
        ],
        tip: 'Acclimatization is important to avoid altitude sickness. Be prepared for a cold summit night and wear layers of clothing.',
        achievement: [
            {
                title: 'Kilimanjaro Conqueror',
                name: 'Conquer Mount Kilimanjaro, Tanzania',
                description: 'Amazing work reaching the summit of Kilimanjaro! You’ve taken on Africa’s tallest mountain with great determination.'
            }
        ]
    },
    {
        image: require('../assets/places/6.png'),
        name: 'Matterhorn',
        country: 'Switzerland/Italy',
        coordinates: [{ lat: 45.9763, lng: 7.6586 }],
        description: 'Standing at 4,478 meters, the Matterhorn is one of the most iconic mountains in the world. Its distinctive pyramid shape has made it a symbol of the Alps. The mountain offers a challenging climb that is suitable for experienced mountaineers, with technical routes and steep terrain.',
        route: [
            {
                title: 'Starting Point',
                description: 'The ascent begins from the Theodul Pass on the Swiss-Italian border, accessible by cable car or foot from Zermatt.'
            },
            {
                title: 'Initial Ascent',
                description: 'The climb starts with a gradual path up to the Hörnli Hut at 3,260 meters, a popular resting point before the final push to the summit.'
            },
            {
                title: 'Hörnli Ridge',
                description: 'From the Hörnli Hut, climbers ascend the Hörnli Ridge, a mix of rock and snow climbing. The ridge is narrow and requires proper technique and equipment.'
            },
            {
                title: 'Summit Section',
                description: 'The final section is steep, involving rock scrambling and climbing over mixed terrain. Once at the top, climbers are rewarded with incredible views of the Alps.'
            },
            {
                title: 'Descent',
                description: 'The descent follows the same route, and climbers must remain cautious due to the steepness and risk of rockfall.'
            }
        ],
        tip: 'Due to the technical nature of the climb, climbers should be well-versed in alpine climbing techniques and prepared for extreme weather changes. High-altitude experience is necessary.',
        achievement: [
            {
                title: 'Matterhorn Master',
                name: 'Conquer the Matterhorn, Switzerland/Italy',
                description: 'Incredible achievement! You’ve conquered the iconic Matterhorn, one of the most famous peaks in the Alps!'
            }
        ]
    },
    {
        image: require('../assets/places/7.png'),
        name: 'Mount Denali',
        country: 'USA (Alaska)',
        coordinates: [{ lat: 63.0695, lng: -151.0066 }],
        description: 'Mount Denali, the highest peak in North America at 6,190 meters, is known for its challenging weather and technical difficulty. The climb requires excellent physical conditioning and preparation due to its remoteness and the harsh environment.',
        route: [
            {
                title: 'Starting Point',
                description: 'The typical route starts at the Kahiltna Glacier, where climbers must first establish a base camp.'
            },
            {
                title: 'First Camps',
                description: 'Climbers ascend through the glacier, setting up multiple camps along the way (Camp I, II, and III), gradually acclimatizing to the altitude and weather conditions.'
            },
            {
                title: 'The Headwall',
                description: 'This is one of the most difficult sections, requiring the use of ropes, ice axes, and crampons to ascend steep slopes and avoid crevasses.'
            },
            {
                title: 'Summit Push',
                description: 'The final push involves a long, exhausting climb through the upper reaches of the mountain, with climbers facing extreme cold and fatigue. The summit ridge is narrow and rocky.'
            },
            {
                title: 'Descent',
                description: 'The descent follows the same route, but climbers should take great care due to avalanche risks and the difficult conditions.'
            }
        ],
        tip: 'Denali is often considered one of the hardest climbs due to its length and cold weather. It is crucial to be well-prepared with high-altitude gear and specialized equipment.',
        achievement: [
            {
                title: 'Denali Conqueror',
                name: 'Conquer Denali, USA (Alaska)',
                description: 'Fantastic job on summiting Denali, the highest peak in North America. Your climbing skills are truly exceptional!'
            }
        ]
    },
    {
        image: require('../assets/places/8.png'),
        name: 'K2',
        country: 'Pakistan/China',
        coordinates: [{ lat: 35.8797, lng: 76.5133 }],
        description: 'K2, the second-highest mountain in the world at 8,611 meters, is often regarded as one of the most difficult and dangerous mountains to climb. The mountain\'s steep rock faces and unpredictable weather make it a peak only for the most skilled and prepared climbers.',
        route: [
            {
                title: 'Base Camp',
                description: 'The journey begins at K2 Base Camp, which is accessible by a multi-day trek from Askole, Pakistan. The camp sits at 5,150 meters and serves as the starting point for climbers.'
            },
            {
                title: 'Camp I & II',
                description: 'From Base Camp, climbers ascend through rocky terrain, using fixed ropes to navigate the narrow ridges. Camps I and II are located at 6,000 and 6,800 meters, respectively.'
            },
            {
                title: 'K2\'s Abruzzi Spur',
                description: 'The main climbing route is the Abruzzi Spur, which involves steep rock and ice climbing, requiring expert technique. This section takes several days and is particularly dangerous due to falling rocks and avalanches.'
            },
            {
                title: 'Summit Push',
                description: 'The summit attempt involves navigating through challenging rock sections, deep snow, and glaciers. The final push is highly technical, with climbers facing extreme altitudes and fatigue.'
            },
            {
                title: 'Descent',
                description: 'The descent is equally challenging due to the steep cliffs and technical sections. It requires caution, as the conditions can change rapidly.'
            }
        ],
        tip: 'K2 is considered the hardest of the "eight-thousanders," and it is recommended that climbers have experience on other high-altitude peaks before attempting it. Weather conditions are notoriously unstable, so it’s important to monitor the forecast closely.',
        achievement: [
            {
                title: 'K2 Conqueror',
                name: 'Conquer K2, Pakistan/China',
                description: 'Unbelievable feat! Conquering the Savage Mountain is a testament to your unparalleled skill, resilience, and bravery. You’ve overcome one of the world’s greatest mountaineering challenges!'
            }
        ]
    },
    {
        image: require('../assets/places/9.png'),
        name: 'Mount Elbrus',
        country: 'Russia',
        coordinates: [{ lat: 43.3497, lng: 42.4453 }],
        description: 'Mount Elbrus, at 5,642 meters, is the highest mountain in Europe and an accessible challenge for climbers. Known for its wide, gradual slopes, Elbrus is a popular destination for those looking to climb a "seven-summit" peak.',
        route: [
            {
                title: 'Starting Point',
                description: 'The climb usually starts at the Azau Valley, where climbers can either use the cable cars to reach the Garabashi Station or ascend on foot. The route is a straightforward, snow-covered path.'
            },
            {
                title: 'Camps',
                description: 'The climb involves setting up base camps at various elevations (3,700 meters, 4,100 meters, etc.), with acclimatization days in between.'
            },
            {
                title: 'Summit Push',
                description: 'The final summit push from the last camp is challenging due to the high-altitude conditions. The terrain is covered with snow and ice, and climbers will need to use crampons and ropes for stability.'
            },
            {
                title: 'Summit Section',
                description: 'At the summit, climbers are rewarded with expansive views of the Caucasus Mountains and the surrounding region.'
            },
            {
                title: 'Descent',
                description: 'The descent is straightforward, but climbers should be cautious of fatigue and altitude sickness.'
            }
        ],
        tip: 'Elbrus is considered less technically challenging than other peaks but still requires good physical conditioning. Proper clothing and equipment are essential due to the cold temperatures.',
        achievement: [
            {
                title: 'Elbrus Climber',
                name: 'Conquer Mount Elbrus, Russia',
                description: 'Well done! You’ve reached the top of Mount Elbrus, Europe’s highest peak. A true mountaineering feat!'
            }
        ]
    },
    {
        image: require('../assets/places/10.png'),
        name: 'Aoraki / Mount Cook',
        country: 'New Zealand',
        coordinates: [{ lat: -43.7340, lng: 170.0962 }],
        description: 'Mount Cook, standing at 3,724 meters, is the highest peak in New Zealand and is known for its dramatic landscapes and rugged terrain. It presents a moderate-to-challenging climb, with a combination of rock, ice, and snow.',
        route: [
            {
                title: 'Starting Point',
                description: 'The climb begins at the White Horse Hill Campground. Climbers need to cross the Hooker Valley and prepare for the glacier terrain.'
            },
            {
                title: 'Climbing the Glacier',
                description: 'After crossing the valley, climbers navigate the Tasman Glacier, a vast ice field where the going can be slow due to crevasses and changing conditions.'
            },
            {
                title: 'Summit Push',
                description: 'The final stretch involves an ice and snow climb. It is steep, requiring crampons and ice axes. The summit ridge is exposed, and caution is needed.'
            },
            {
                title: 'At the Summit',
                description: 'The summit offers panoramic views of the Southern Alps and surrounding valleys.'
            },
            {
                title: 'Descent',
                description: 'The descent is equally challenging due to the glacier terrain, requiring careful navigation.'
            }
        ],
        tip: 'Mount Cook’s weather can change quickly, and climbers must be prepared for cold and high winds. Ensure you have proper ice climbing skills and gear.',
        achievement: [
            {
                title: 'Aoraki Ace',
                name: 'Conquer Aoraki / Mount Cook, New Zealand',
                description: 'Outstanding achievement! Summiting the highest peak in New Zealand is a testament to your courage and resilience against challenging alpine conditions.'
            }
        ]
    },
    {
        image: require('../assets/places/11.png'),
        name: 'Mount Rainier',
        country: 'USA (Washington)',
        coordinates: [{ lat: 46.8523, lng: -121.7603 }],
        description: 'Mount Rainier, a dormant stratovolcano in Washington State, is one of the most iconic mountains in the Pacific Northwest. It stands at 4,392 meters and offers a demanding climb, especially due to its glaciers.',
        route: [
            {
                title: 'Starting Point',
                description: 'The route usually begins from Paradise, the most popular trailhead for the climb.'
            },
            {
                title: 'Glacier Travel',
                description: 'As you ascend, the climb becomes increasingly steep, and you will encounter glaciers. Roped climbing is necessary, and ice axes and crampons are essential for safety.'
            },
            {
                title: 'Camp Muir',
                description: 'A major resting point before the final summit push, located at 3,200 meters.'
            },
            {
                title: 'Summit Push',
                description: 'From Camp Muir, climbers follow the Disappointment Cleaver route, which involves steep snow slopes and rock scrambling. The final summit push is difficult and requires proper acclimatization.'
            },
            {
                title: 'Descent',
                description: 'The descent is the reverse of the ascent, requiring caution due to snow conditions and weather changes.'
            }
        ],
        tip: 'Mount Rainier is a technical climb and should be attempted only by climbers with experience in glacier travel. Be prepared for cold weather and possible altitude sickness.',
        achievement: [
            {
                title: 'Rainier Ranger',
                name: 'Conquer Mount Rainier, USA (Washington)',
                description: 'Incredible accomplishment! Tackling Mount Rainier’s glaciers and steep slopes showcases your technical expertise and determination.'
            }
        ]
    },
    {
        image: require('../assets/places/12.png'),
        name: 'Mount Annapurna',
        country: 'Nepal',
        coordinates: [{ lat: 28.5962, lng: 83.8203 }],
        description: 'Mount Annapurna, one of the most dangerous mountains to climb, stands at 8,091 meters. Known for its challenging weather conditions and steep ascent, it is one of the hardest peaks to summit.',
        route: [
            {
                title: 'Base Camp',
                description: 'The ascent starts from Annapurna Base Camp, accessible after a long trek through the foothills.'
            },
            {
                title: 'Climbing to Camp I',
                description: 'The first camp is located at around 6,000 meters. This part of the climb involves rocky and glacial terrain.'
            },
            {
                title: 'Summit Push',
                description: 'The final push involves technical climbing, and the summit is reached via an extremely steep ridge. Conditions are difficult, and climbers need to be highly skilled.'
            },
            {
                title: 'Descent',
                description: 'Descending Annapurna is particularly dangerous due to avalanche risk. Climbers should be cautious of snow conditions on the way down.'
            }
        ],
        tip: 'Only highly experienced mountaineers should attempt Annapurna, given its high risk and technical difficulty.',
        achievement: [
            {
                title: 'Annapurna Adventurer',
                name: 'Conquer Annapurna, Nepal',
                description: 'Impressive achievement! Annapurna is a challenging peak, and you’ve conquered it with great courage and skill.'
            }
        ]
    }
];

export default places;