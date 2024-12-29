const encyclopedia = [
    {
        topic: "Climbing Harnesses: Types and How to Choose",
        education: "A climbing harness is one of the most critical pieces of equipment in a mountaineer's kit. It connects the climber to the rope, providing safety and stability while climbing. There are various types of harnesses designed for different types of climbing, including sport climbing, trad climbing, alpine climbing, and ice climbing.",
        types: [
            {
                type: "Sport Climbing Harness",
                description: "Designed for performance, with a focus on comfort and mobility. Lightweight with a simple design that prioritizes ease of use."
            },
            {
                type: "Trad Climbing Harness",
                description: "Offers more gear loops for carrying additional equipment like cams and nuts. Slightly heavier but provides better support for multi-pitch climbing."
            },
            {
                type: "Alpine Harness",
                description: "Lightweight and compact, ideal for climbing in extreme conditions. Often has minimal padding to reduce weight but is designed for comfort during long days in the mountains."
            },
            {
                type: "Ice Climbing Harness",
                description: "Typically more durable with additional reinforcements in areas that experience wear from ice screws or other sharp equipment."
            }
        ],
        guide: "When choosing a harness, climbers must consider comfort, fit, and the type of climbing they plan to do. Try on a harness before purchasing to ensure it fits well and allows full mobility. It should fit snugly around the waist and legs without being too tight and should be adjustable for varying clothing layers.",
        features: [
            "Waistbelt: Wide and padded for comfort, especially for multi-pitch climbs.",
            "Leg Loops: Padded for comfort; adjustable loops are important for alpine and winter climbing.",
            "Gear Loops: Essential for carrying climbing hardware like carabiners, cams, or nuts.",
            "Belay Loops: Should be strong and securely stitched for connecting the rope."
        ],
        tips: [
            "Simulate climbing movements when trying on a harness to ensure comfort during activities.",
            "Ensure the harness is easily adjustable without compromising safety when wearing thick layers."
        ]
    },
    {
        topic: "Climbing Ropes: Materials, Diameters, and Uses",
        education: "A climbing rope is the lifeline for a climber, providing essential safety and protection during both lead and top-rope climbing. The rope is used for securing climbers to anchors, belaying partners, and arresting falls. Choosing the right rope is crucial to ensure safety, performance, and longevity.",
        types: [
            {
                type: "Dynamic Ropes",
                description: "Designed to stretch and absorb the energy of a fall, reducing impact force on the climber and belayer. Used in lead climbing, ice climbing, and multi-pitch climbing."
            },
            {
                type: "Static Ropes",
                description: "Minimal stretch, used for rappelling, rescue operations, and hauling gear. Not suitable for lead climbing due to lack of stretch."
            },
            {
                type: "Half Ropes",
                description: "Thinner ropes used in pairs, offering added flexibility for managing different types of protection. Ideal for longer routes to reduce rope drag."
            },
            {
                type: "Twin Ropes",
                description: "Used together with both ropes clipped into every piece of protection. Lighter and thinner, typically for long multi-pitch routes."
            }
        ],
        guide: "Factors to consider when choosing a rope include the type of climbing, terrain, and personal preferences.",
        features: [
            "Length: Ropes range from 30m to 80m. Longer ropes provide more flexibility, while shorter ropes are lighter and easier to manage.",
            "Diameter: Determines strength, durability, and handling. Thicker ropes last longer but are heavier; thinner ropes are lighter but may wear out more quickly.",
            "Dry Treatment: Prevents water absorption for wet environments, reducing weight and maintaining strength. Essential for ice and alpine climbing."
        ],
        tips: [
            "Always check the rope for signs of damage, including abrasions or cuts, before each climb.",
            "Store ropes properly by coiling them neatly to avoid knots and tangles that can cause wear over time."
        ]
    },
    {
        topic: "Carabiners: Types, Uses, and Safety",
        education: "Carabiners are essential pieces of equipment in mountaineering and climbing. They are used to connect various components of the climbing system, including ropes, harnesses, and anchors. Carabiners come in various shapes, sizes, and locking mechanisms, and understanding how to choose and use them properly is essential for safety.",
        types: [
            {
                type: "Oval Carabiners",
                description: "Lightweight and strong, often used for belaying and connecting equipment. Their symmetrical shape makes them useful for securing a wide range of items."
            },
            {
                type: "D-Shaped Carabiners",
                description: "The most common type of carabiner, stronger and more ergonomic than oval carabiners. The D-shape allows the rope or gear to be loaded along the spine, increasing strength."
            },
            {
                type: "Locking Carabiners",
                description: "Feature a locking mechanism to prevent accidental opening. Used for belaying and securing ropes to anchors and other safety devices. Main types include screw-lock, twist-lock, and auto-locking."
            },
            {
                type: "Quickdraw Carabiners",
                description: "Quickdraws consist of two carabiners attached by a sling. Used to connect the climber’s rope to anchors or protection points during lead climbing. Available in various shapes and sizes."
            }
        ],
        guide: "Carabiners come in different sizes and strengths, so it’s essential to choose the right one based on the type of climbing you are doing. Pay attention to the gate mechanism (locking vs. non-locking) and ensure the carabiner is rated for the weight and forces it will encounter.",
        features: [
            "Locking Mechanism: Crucial for safety-critical applications, especially for securing ropes and belaying.",
            "Weight and Durability: Lighter carabiners are preferred for sport climbing, while heavier, more durable ones are better for trad climbing."
        ],
        tips: [
            "Always double-check that the locking mechanism is fully engaged before relying on a carabiner for protection.",
            "Avoid cross-loading the carabiner (loading the spine rather than the gate), as this can reduce the strength of the carabiner."
        ]
    },
    {
        topic: "Climbing Crampons: Features, Types, and Uses",
        education: "Crampons are essential for climbing on snow and ice. They provide traction on icy surfaces, allowing climbers to ascend steep slopes or glaciers. Crampons are worn over boots and are equipped with sharp metal points that dig into the ice, offering a stable footing.",
        types: [
            {
                type: "General Mountaineering Crampons",
                description: "Versatile crampons with a mix of horizontal and vertical points, designed for general climbing conditions, including mixed ice and rock routes."
            },
            {
                type: "Ice Climbing Crampons",
                description: "Specifically designed for ice climbing, featuring more aggressive points to penetrate thick ice. Points are longer and sharper than those on general mountaineering crampons."
            },
            {
                type: "Alpine Crampons",
                description: "Lightweight and compact, designed for alpine climbing. Provide optimal efficiency for technical climbing on glaciers and snowy ridges."
            },
            {
                type: "Automatic vs. Strap-on Crampons",
                description: "Automatic crampons attach to boots with a heel welt, offering the most secure fit. Strap-on crampons are more versatile and can be used with a variety of boots but are typically less secure."
            }
        ],
        guide: "When selecting crampons, climbers should consider the type of climbing they plan to do and the type of boots they will be using.",
        features: [
            "Boot Compatibility: Ensure crampons are compatible with your climbing boots. Some crampons are designed for specific boot types.",
            "Point Design: For steep ice or mixed rock-ice routes, choose crampons with longer, more aggressive points. For glacier climbing or general mountaineering, shorter, more versatile points are sufficient."
        ],
        tips: [
            "Regularly check the crampon points for damage or wear. Dull or bent points can cause instability on ice and increase the risk of slipping.",
            "Practice walking in crampons before attempting more challenging terrain to get comfortable with the technique."
        ]
    },
    {
        topic: "Ice Axes: Types, Uses, and How to Choose the Right One",
        education: "An ice axe is a critical tool for climbing on icy or snow-covered terrain, offering stability, balance, and protection. It’s used to arrest falls, aid in self-belaying, and assist in traversing ice slopes. Choosing the right ice axe depends on the type of climbing, terrain, and personal preferences.",
        types: [
            {
                type: "Classic Ice Axes",
                description: "Traditional axes with a straight shaft, often used for general mountaineering. Simple, durable, and effective for self-arresting in alpine environments."
            },
            {
                type: "Technical Ice Axes",
                description: "Designed for ice climbing, these are lighter and more ergonomic, with a curved shaft and aggressive pick to better penetrate steep ice."
            },
            {
                type: "Mountain Axes",
                description: "A hybrid of classic and technical axes, lightweight and compact. Ideal for general mountaineering, glacier travel, and alpine climbing."
            },
            {
                type: "Hammered Axes",
                description: "Axes with a heavier head and a flat side, useful for driving ice screws or building anchors in mixed climbing environments."
            }
        ],
        guide: "Choosing the right ice axe involves considering the type of climbing, terrain, and length. Shorter axes are ideal for technical climbing, while longer axes work better for general mountaineering.",
        features: [
            "Length: Shorter axes are lighter and suitable for steep climbing, while longer axes provide more reach and stability for general use.",
            "Pick: The angle and shape of the pick are important for performance. Aggressive picks are suited for steep ice, while milder angles are better for glacier travel."
        ],
        tips: [
            "Always practice self-arresting with an ice axe to ensure you can stop yourself in case of a fall.",
            "Use a leash to secure the ice axe and prevent losing it during a climb."
        ]
    },
    {
        topic: "Climbing Boots: What You Need to Know",
        education: "Climbing boots are designed to provide support, protection, and traction on various climbing surfaces. Properly fitted boots are crucial for safety and performance, especially in extreme conditions like ice, rock, or mixed terrain. Boots come in various designs to meet the specific needs of climbers.",
        types: [
            {
                type: "Bouldering Boots",
                description: "Low-profile and lightweight, designed for maximum sensitivity and grip. Typically made with sticky rubber soles for optimal traction."
            },
            {
                type: "Mountaineering Boots",
                description: "Stiff and insulated, these boots are ideal for high-altitude and cold environments. Compatible with crampons for ice and snow climbing."
            },
            {
                type: "Trad Climbing Boots",
                description: "Provide a balance between comfort, support, and performance. Stiff enough for trad climbs but flexible for delicate foot placements."
            },
            {
                type: "Approach Shoes",
                description: "Used for walking and scrambling to the base of a climb. Lightweight, flexible, and offer traction on mixed terrain."
            }
        ],
        guide: "Choose climbing boots based on the fit, support, and insulation needed for the environment and type of climb.",
        features: [
            "Fit: Ensure boots fit snugly without causing discomfort. Toes should touch the front without pain or pressure points.",
            "Support: Boots for technical climbs should provide sufficient ankle and arch support to prevent injury.",
            "Insulation: For cold-weather or alpine climbs, insulated boots are essential to retain warmth and comfort."
        ],
        tips: [
            "Always try on boots with the socks you plan to wear during climbing to ensure a proper fit.",
            "Use boot gaiters to keep snow or debris out of your boots during climbs in snowy or rocky environments."
        ]
    },
    {
        topic: "Belay Devices: Types, Uses, and Safety",
        education: "Belay devices are used to control the rope during climbing, providing protection in case the climber falls. There are several types of belay devices, each designed for different climbing activities. Choosing the right one depends on the style of climbing and the level of control required.",
        types: [
            {
                type: "Tube-Style Belay Devices",
                description: "The most common type, featuring a simple design that uses friction to control the rope. Lightweight, versatile, and easy to use, making them suitable for top-rope and lead climbing."
            },
            {
                type: "Auto-Locking Belay Devices",
                description: "Automatically lock the rope in place, providing hands-free control. Ideal for belayers who need extra protection while managing the rope for a climber."
            },
            {
                type: "Assisted-Braking Belay Devices",
                description: "Provide additional braking power in case of a fall. Particularly useful in lead climbing or situations where extra stopping power is needed."
            },
            {
                type: "Figure-8 Belay Devices",
                description: "Primarily designed for lowering and rappelling, these devices allow for precise control of the rope’s speed."
            }
        ],
        guide: "Choosing the right belay device depends on the climbing style, ease of use, and compatibility with the rope. Consider auto-locking or assisted-braking devices for more control during lead climbing, and tube-style devices for general use.",
        features: [
            "Climbing Style: Select a device suited to your type of climbing. For lead climbing, auto-locking or assisted-braking devices provide added safety.",
            "Ease of Use: Ensure the belay device works well with your rope and feels smooth and comfortable when handling."
        ],
        tips: [
            "Always ensure the belay device is properly set up and the rope is threaded correctly before climbing.",
            "Practice with your belay device in a safe environment to become comfortable with its operation before attempting challenging climbs."
        ]
    },
    {
        topic: "Climbing Chalk: Importance and Uses",
        education: "Climbing chalk is used to absorb sweat and improve grip, especially during strenuous climbing sessions. While it may seem like a minor piece of equipment, it’s a vital tool for climbers, particularly in sport climbing or during long climbs in warm conditions. Chalk also helps maintain a dry grip on wet rocks or holds.",
        types: [
            {
                type: "Loose Chalk",
                description: "Powdered chalk applied directly to the hands. Effective at quickly drying out sweaty hands but can be messy."
            },
            {
                type: "Chalk Balls",
                description: "Bags filled with loose chalk that climbers squeeze to apply chalk to their hands. Less messy than loose chalk and can be refilled when necessary."
            },
            {
                type: "Liquid Chalk",
                description: "Applied to the hands before a climb and quickly dries, providing an extra layer of grip. Less likely to leave chalk marks on surfaces and is a good option for competitions or indoor climbing."
            }
        ],
        guide: "Using chalk effectively involves applying the right amount to maintain a solid grip while minimizing waste and mess. Choose the type of chalk based on your climbing environment and personal preference.",
        features: [
            "Use Chalk Sparingly: Overusing chalk can make hands slippery. Apply just enough to dry the skin and improve grip.",
            "Refill Chalk Balls Regularly: Ensure your chalk supply is adequate for long climbs by refilling chalk balls as needed."
        ],
        tips: [
            "Store chalk in a bag or container to prevent spills and wastage.",
            "Limit chalk use indoors to reduce excessive dust buildup in climbing gyms."
        ]
    },
    {
        topic: "Climbing Protection: Types and How to Place It",
        education: "Climbing protection is used to secure the climber to the rock, ensuring safety in the event of a fall. These devices are essential in trad climbing and require skillful placement for effective use. Mastering protection placement is a key skill for every trad climber.",
        types: [
            {
                type: "Nuts",
                description: "Passive protection devices that fit into cracks in the rock. They come in various sizes and are commonly used for anchoring during trad climbing."
            },
            {
                type: "Cams",
                description: "Active protection devices that expand when placed in a crack, providing a secure hold. Versatile and usable in a wide range of crack sizes."
            },
            {
                type: "Hexes",
                description: "Hexagon-shaped passive protection devices. Useful for larger cracks and provide strong, stable protection."
            },
            {
                type: "Pitons",
                description: "Metal spikes hammered into cracks or seams in the rock. Typically used when other forms of protection are unsuitable."
            }
        ],
        guide: "Proper placement of climbing protection involves selecting the right device size for the crack, testing the placement before loading it, and carrying a variety of protection types for different terrains.",
        features: [
            "Choose the Right Size: Ensure the protection fits the crack securely. Incorrect sizing can result in failure to hold.",
            "Check Placement: Gently pull on the placed protection to test its stability before relying on it for support."
        ],
        tips: [
            "Practice placing protection in various crack types and conditions to build confidence and proficiency.",
            "Always carry a diverse set of protection devices to adapt to changing terrain conditions."
        ]
    },
    {
        topic: "Climbing Knots: Essential Knots Every Climber Should Know",
        education: "Climbing knots are vital for securing ropes, harnesses, and other equipment, ensuring safety during a climb. Mastering key knots is crucial for climbers of all levels to handle various climbing scenarios confidently.",
        types: [
            {
                type: "Figure-8 Knot",
                description: "Used to tie the rope to a harness. Reliable, easy to tie, untie, and inspect."
            },
            {
                type: "Clove Hitch",
                description: "Used for attaching a rope to an anchor. Simple to tie and adjust, making it ideal for trad climbing."
            },
            {
                type: "Bowline Knot",
                description: "Creates a fixed loop in the rope, often used for tying into a harness. Secure and easy to untie after being loaded."
            },
            {
                type: "Double Fisherman’s Knot",
                description: "Used to tie two ropes together or create a loop in a rope. Strong and secure, commonly used in rappelling or creating cordelettes."
            }
        ],
        guide: "Practice tying knots until they can be done quickly and confidently in various conditions. Always inspect knots before use to ensure they are secure.",
        features: [
            "Practice Regularly: Build muscle memory by practicing knots in different conditions, such as low-light or cold environments.",
            "Double-Check Knots: Always inspect knots for proper tying and tightness before starting a climb."
        ],
        tips: [
            "Use knot-tying tools or practice ropes to refine your technique and maintain your skills.",
            "Learn how to untie knots efficiently, especially in emergencies where quick action is needed."
        ]
    }
];

export default encyclopedia;
