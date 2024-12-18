import { Club } from '@/types/club';

export const traditionalClubs: Club[] = [
    {
        "id": 1,
        "rank": 1,
        "name": "Soho House",
        "city": "London, UK",
        "establishedYear": 1995,
        "membershipFees": {
            "annual": 3355.0,
            "joiningFee": 6710.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Application and referral"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, gym, pool, cinema, rooftop",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking, film screenings, DJ nights",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "sohohouse.com",
        "description": "A global network of private clubs for creative professionals offering a unique blend of amenities and activities.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "Soho House photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 2,
        "rank": 2,
        "name": "The Club at The Ivy",
        "city": "London, UK",
        "establishedYear": 1990,
        "membershipFees": {
            "annual": 2135.0,
            "joiningFee": 4270.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Dining",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, exclusive events",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Exclusive dining events, live music",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "the-ivy.co.uk",
        "description": "An extension of the famed Ivy restaurant, this club offers an exclusive atmosphere for dining and arts.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 5,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Club at The Ivy photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 3,
        "rank": 3,
        "name": "The Ned",
        "city": "London, UK",
        "establishedYear": 2017,
        "membershipFees": {
            "annual": 4270.0,
            "joiningFee": 8540.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Application with vetting"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Gym, spa, restaurants, rooftop pool",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Concerts, workshops, rooftop events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "thened.com",
        "description": "Housed in a historic building, The Ned offers luxury amenities and a bustling social scene in the heart of London.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Ned photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 4,
        "rank": 4,
        "name": "Annabel's",
        "city": "London, UK",
        "establishedYear": 1963,
        "membershipFees": {
            "annual": 3965.0,
            "joiningFee": 7930.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bars, garden terrace, wellness spa",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Live music, themed parties, guest speakers",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "annabels.co.uk",
        "description": "A legendary member's club known for its stunning decor and vibrant nightlife.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "Annabel's photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 5,
        "rank": 5,
        "name": "CORE: Club",
        "city": "New York, UK",
        "establishedYear": 2005,
        "membershipFees": {
            "annual": 15000.0,
            "joiningFee": 30000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Application and interview"
            ]
        },
        "clubType": [
            "Business",
            "Arts"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, fitness, art gallery, library",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking, private dinners, art exhibits",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "thecoreclub.com",
        "description": "A hub for influential figures in art and business, CORE: offers curated experiences and elite networking.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "CORE: Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 6,
        "rank": 6,
        "name": "Silencio",
        "city": "Paris, UK",
        "establishedYear": 2011,
        "membershipFees": {
            "annual": 1050.0,
            "joiningFee": 2100.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Creative industry professionals"
            ]
        },
        "clubType": [
            "Arts",
            "Film",
            "Music"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Cinema, library, bar",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Film screenings, live performances",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "silencio.com",
        "description": "Designed by David Lynch, Silencio is a cult favorite among Paris' artistic elite.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "Silencio photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 7,
        "rank": 7,
        "name": "The Arts Club",
        "city": "London, UK",
        "establishedYear": 1863,
        "membershipFees": {
            "annual": 2440.0,
            "joiningFee": 4880.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Application and referral"
            ]
        },
        "clubType": [
            "Arts",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bars, art gallery",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Art exhibitions, music events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "theartsclub.co.uk",
        "description": "A historic club that fosters creative exchanges among artists, writers, and musicians.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Arts Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 8,
        "rank": 8,
        "name": "Cercle de Lorraine",
        "city": "Brussels, UK",
        "establishedYear": 2008,
        "membershipFees": {
            "annual": 1260.0,
            "joiningFee": 2520.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business leaders"
            ]
        },
        "clubType": [
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Conference rooms, dining",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Business networking, seminars",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "cercledelorraine.be",
        "description": "A prestigious venue that caters to business professionals seeking a sophisticated networking environment.",
        "reviews": [
            {
                "rating": 3,
                "comment": "Mixed reviews",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 5,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "Cercle de Lorraine photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 9,
        "rank": 9,
        "name": "The Battery",
        "city": "San Francisco, UK",
        "establishedYear": 2014,
        "membershipFees": {
            "annual": 5400.0,
            "joiningFee": 10800.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Application and interview"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Gym, spa, dining, library",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Tech talks, private concerts",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "thebatterysf.com",
        "description": "Known for its dynamic community, The Battery blends technology, culture, and luxury in an exclusive setting.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Battery photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 10,
        "rank": 10,
        "name": "Capital Club",
        "city": "Dubai, UK",
        "establishedYear": 1995,
        "membershipFees": {
            "annual": 2025.0,
            "joiningFee": 4050.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business professionals"
            ]
        },
        "clubType": [
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, business facilities, sports bar",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Business meetings, cultural events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "capitalclubdubai.com",
        "description": "A leading private business club in Dubai, providing a luxurious space for networking and corporate events.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "Capital Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 11,
        "rank": 11,
        "name": "Magic Circle",
        "city": "Tokyo, UK",
        "establishedYear": 2006,
        "membershipFees": {
            "annual": 1800.0,
            "joiningFee": 3600.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Entertainment"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Magic shows, dining, bar",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Magic performances, private events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "magiccircletokyo.jp",
        "description": "Exclusive club for magic enthusiasts and professionals, offering live performances and themed dining experiences.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "Magic Circle photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 12,
        "rank": 12,
        "name": "The Groucho Club",
        "city": "London, UK",
        "establishedYear": 1985,
        "membershipFees": {
            "annual": 1500.0,
            "joiningFee": 3000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Application and referral"
            ]
        },
        "clubType": [
            "Arts",
            "Media"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Bars, dining, art gallery",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Literary talks, screenings",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "thegrouchoclub.com",
        "description": "A haven for the creative industries, known for its artistic vibe and eclectic membership.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Groucho Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 13,
        "rank": 13,
        "name": "Yellowstone Club",
        "city": "Montana, UK",
        "establishedYear": 2000,
        "membershipFees": {
            "annual": 30000.0,
            "joiningFee": 60000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Land purchase required"
            ]
        },
        "clubType": [
            "Sports",
            "Skiing"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Ski slopes, golf, dining, spa",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Skiing, golf tournaments",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "yellowstoneclub.com",
        "description": "An exclusive ski and golf resort offering private mountain access and luxurious amenities for its members.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 5,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "Yellowstone Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 14,
        "rank": 14,
        "name": "Yacht Club de Monaco",
        "city": "Monaco, UK",
        "establishedYear": 1953,
        "membershipFees": {
            "annual": 2200.0,
            "joiningFee": 4400.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Boat ownership, referral"
            ]
        },
        "clubType": [
            "Yachting"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Marina, dining, bar, regatta participation",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Sailing regattas, social gatherings",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "ycmonaco.com",
        "description": "Prestigious club fostering maritime traditions and yachting excellence among its international membership.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "Yacht Club de Monaco photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 15,
        "rank": 15,
        "name": "White's Club",
        "city": "London, UK",
        "establishedYear": 1693,
        "membershipFees": {
            "annual": 3000.0,
            "joiningFee": 6000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Social",
            "Heritage"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, billiards",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Member talks, historical events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "whitesclub.com",
        "description": "One of the oldest and most exclusive gentlemen's clubs in the world, steeped in tradition and history.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "White's Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 16,
        "rank": 16,
        "name": "The Kee Club",
        "city": "Hong Kong, UK",
        "establishedYear": 2001,
        "membershipFees": {
            "annual": 1500.0,
            "joiningFee": 3000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Application and referral"
            ]
        },
        "clubType": [
            "Arts",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, art exhibitions, lounge",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Cultural events, networking",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "keeclub.com",
        "description": "A stylish venue combining artistic and business pursuits in a sophisticated setting for Hong Kong's elite.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Kee Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 17,
        "rank": 17,
        "name": "The Cobden Club",
        "city": "London, UK",
        "establishedYear": 1998,
        "membershipFees": {
            "annual": 1350.0,
            "joiningFee": 2700.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Application and referral"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, workshop spaces",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Workshops, private events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "cobdenclub.com",
        "description": "A club dedicated to creatives and entrepreneurs with a focus on innovation and collaboration.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Cobden Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 18,
        "rank": 18,
        "name": "Moscow Club",
        "city": "Moscow, UK",
        "establishedYear": 1991,
        "membershipFees": {
            "annual": 2000.0,
            "joiningFee": 4000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business professionals"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, spa, sauna",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Business meetings, Russian-themed events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "moscowclub.ru",
        "description": "A central meeting place for Moscow's business community, offering a blend of luxury, culture, and networking.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "Moscow Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 19,
        "rank": 19,
        "name": "The Australian Club",
        "city": "Sydney, UK",
        "establishedYear": 1838,
        "membershipFees": {
            "annual": 2500.0,
            "joiningFee": 5000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, library, billiards",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Literary evenings, debates",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "australianclub.org.au",
        "description": "A prestigious institution reflecting the social and business ethos of the Australian elite.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Australian Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 20,
        "rank": 20,
        "name": "The Athenaeum",
        "city": "Los Angeles, UK",
        "establishedYear": 1930,
        "membershipFees": {
            "annual": 2750.0,
            "joiningFee": 5500.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Academic, professional merits"
            ]
        },
        "clubType": [
            "Academic",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, library, guest rooms",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Lectures, cultural events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "athenaeumcaltech.com",
        "description": "An intellectual hub affiliated with Caltech, catering to academics and professionals in a historic setting.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Athenaeum photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 21,
        "rank": 21,
        "name": "The Wing",
        "city": "New York, UK",
        "establishedYear": 2016,
        "membershipFees": {
            "annual": 2350.0,
            "joiningFee": 4700.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Application and referral"
            ]
        },
        "clubType": [
            "Women's Networking"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Workspaces, beauty room, cafe",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Workshops, lectures, networking",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "the-wing.com",
        "description": "A network of work and community spaces designed for women, with a focus on empowerment and convenience.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 5,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Wing photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 22,
        "rank": 22,
        "name": "92nd Street Y",
        "city": "New York, UK",
        "establishedYear": 1874,
        "membershipFees": {
            "annual": 1200.0,
            "joiningFee": 2400.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Open membership"
            ]
        },
        "clubType": [
            "Cultural",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Theater, classrooms, gym",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Concerts, lectures, classes",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "92y.org",
        "description": "A cultural and community center that offers a wide range of programs including arts, education, and wellness activities.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 5,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "92nd Street Y photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 23,
        "rank": 23,
        "name": "The Hospital Club",
        "city": "London, UK",
        "establishedYear": 2004,
        "membershipFees": {
            "annual": 1800.0,
            "joiningFee": 3600.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Creative industry professionals"
            ]
        },
        "clubType": [
            "Arts",
            "Media"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Cinema, TV studio, art gallery",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Screenings, performances, exhibitions",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "thehospitalclub.com",
        "description": "A hub for professionals in the creative industries, providing spaces for both work and socializing.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Hospital Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 24,
        "rank": 24,
        "name": "Home House",
        "city": "London, UK",
        "establishedYear": 1773,
        "membershipFees": {
            "annual": 3200.0,
            "joiningFee": 6400.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Application and interview"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Bars, gym, spa, dining rooms",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking, parties, dinners",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "homehouse.co.uk",
        "description": "A luxurious private members club set in historic Georgian townhouses, offering elegant hospitality and services.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "Home House photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 25,
        "rank": 25,
        "name": "The Jonathan Club",
        "city": "Los Angeles, UK",
        "establishedYear": 1895,
        "membershipFees": {
            "annual": 3500.0,
            "joiningFee": 7000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Beach facilities, dining, fitness center",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Sports, social events, dining",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "jc.org",
        "description": "A prestigious members-only club with both town and beach locations, offering a range of sports and social facilities.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Jonathan Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 26,
        "rank": 26,
        "name": "The Standard Club",
        "city": "Chicago, UK",
        "establishedYear": 1869,
        "membershipFees": {
            "annual": 2800.0,
            "joiningFee": 5600.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Application and interview"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, squash courts, fitness center",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking, cultural events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "stclub.org",
        "description": "One of Chicago's oldest private clubs, known for its distinguished membership and commitment to social and business networking.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Standard Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 27,
        "rank": 27,
        "name": "Cosmos Club",
        "city": "Washington, D.C., UK",
        "establishedYear": 1878,
        "membershipFees": {
            "annual": 2000.0,
            "joiningFee": 4000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation based on merit"
            ]
        },
        "clubType": [
            "Academic",
            "Cultural"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, accommodations, library",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Lectures, debates, social gatherings",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "cosmosclub.org",
        "description": "A private social club for the intellectually distinguished, offering a rich program of lectures, entertainment, and dining.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "Cosmos Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 28,
        "rank": 28,
        "name": "The Turf Club",
        "city": "New York, UK",
        "establishedYear": 1860,
        "membershipFees": {
            "annual": 3000.0,
            "joiningFee": 6000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Social gatherings, private events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "No Website Available",
        "description": "An exclusive social club known for its high-profile membership and tradition of privacy.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 5,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Turf Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 29,
        "rank": 29,
        "name": "The Vancouver Club",
        "city": "Vancouver, UK",
        "establishedYear": 1889,
        "membershipFees": {
            "annual": 2500.0,
            "joiningFee": 5000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Application and referral"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Fitness center, dining rooms, wine cellar",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking, wine tastings, events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "vancouverclub.ca",
        "description": "A heritage club that blends traditional decor with modern amenities, serving the business and social community.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Vancouver Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 30,
        "rank": 30,
        "name": "The Savage Club",
        "city": "Melbourne, UK",
        "establishedYear": 1894,
        "membershipFees": {
            "annual": 1500.0,
            "joiningFee": 3000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Arts",
            "Literature"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Library, bar, billiards room",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Performances, literary discussions",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "savageclub.com",
        "description": "A club for those interested in the arts, literature, and science, fostering a bohemian atmosphere of debate and discussion.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Savage Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 31,
        "rank": 31,
        "name": "The Brook",
        "city": "New York, UK",
        "establishedYear": 1903,
        "membershipFees": {
            "annual": 2000.0,
            "joiningFee": 4000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, library, accommodation",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Private events, dinners",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "No Website Available",
        "description": "An elite club known for its strict privacy policy and high-profile membership, hosting various social and cultural events.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 5,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Brook photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 32,
        "rank": 32,
        "name": "Union Club of Boston",
        "city": "Boston, UK",
        "establishedYear": 1863,
        "membershipFees": {
            "annual": 1800.0,
            "joiningFee": 3600.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Application and interview"
            ]
        },
        "clubType": [
            "Social",
            "Cultural"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, fitness center, guest rooms",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Lectures, social events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "unionclub.org",
        "description": "A historic club offering a mix of cultural and social activities, with a strong tradition in Boston's elite society.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "Union Club of Boston photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 33,
        "rank": 33,
        "name": "The Athenaeum",
        "city": "London, UK",
        "establishedYear": 1824,
        "membershipFees": {
            "annual": 2600.0,
            "joiningFee": 5200.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Academic, professional merits"
            ]
        },
        "clubType": [
            "Academic",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Library, dining, spa",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Lectures, debates, networking",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "athenaeumclub.co.uk",
        "description": "A prestigious club for individuals from the academic and professional fields, promoting intellectual and social exchanges.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Athenaeum photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 34,
        "rank": 34,
        "name": "The California Club",
        "city": "Los Angeles, UK",
        "establishedYear": 1888,
        "membershipFees": {
            "annual": 3400.0,
            "joiningFee": 6800.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, fitness, squash courts",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking, cultural events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "calclub.org",
        "description": "One of the most exclusive clubs in Los Angeles, known for its strict membership policy and luxurious amenities.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The California Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 35,
        "rank": 35,
        "name": "The Caledonian Club",
        "city": "London, UK",
        "establishedYear": 1891,
        "membershipFees": {
            "annual": 1950.0,
            "joiningFee": 3900.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Scottish connection required"
            ]
        },
        "clubType": [
            "Social",
            "Cultural"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, accommodation",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Scottish cultural events, gatherings",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "caledonianclub.com",
        "description": "A club that celebrates Scottish heritage, offering a home away from home for Scots in London.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Caledonian Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 36,
        "rank": 36,
        "name": "The Rainier Club",
        "city": "Seattle, UK",
        "establishedYear": 1888,
        "membershipFees": {
            "annual": 2250.0,
            "joiningFee": 4500.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, library, fitness center",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Business networking, social events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "therainierclub.com",
        "description": "An exclusive club in Seattle with a rich history of serving the business community and hosting social events.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Rainier Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 37,
        "rank": 37,
        "name": "The Detroit Club",
        "city": "Detroit, UK",
        "establishedYear": 1882,
        "membershipFees": {
            "annual": 2000.0,
            "joiningFee": 4000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Application and referral"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, health club, accommodation",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Private events, networking",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "thedetroitclub.com",
        "description": "A historic club known for its opulent decor and being a meeting place for Detroit's business and social elite.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Detroit Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 38,
        "rank": 38,
        "name": "The Western Club",
        "city": "Glasgow, UK",
        "establishedYear": 1825,
        "membershipFees": {
            "annual": 1600.0,
            "joiningFee": 3200.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, meeting rooms",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking, cultural dinners",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "westernclub.co.uk",
        "description": "A premier private club in Glasgow known for its fine dining and exclusive networking events.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Western Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 39,
        "rank": 39,
        "name": "The Buffalo Club",
        "city": "Buffalo, UK",
        "establishedYear": 1867,
        "membershipFees": {
            "annual": 1500.0,
            "joiningFee": 3000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, fitness center, guest rooms",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Social gatherings, business meetings",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "buffaloclub.org",
        "description": "A key institution in Buffalo, offering a luxurious setting for business and social interactions among its members.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Buffalo Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 40,
        "rank": 40,
        "name": "The Union Club of British Columbia",
        "city": "Victoria, UK",
        "establishedYear": 1879,
        "membershipFees": {
            "annual": 1700.0,
            "joiningFee": 3400.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, accommodation, fitness center",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking, social events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "unionclub.com",
        "description": "An exclusive club with a British heritage, known for its refined atmosphere and engagement with the community.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Union Club of British Columbia photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 41,
        "rank": 41,
        "name": "The Arctic Club",
        "city": "Seattle, UK",
        "establishedYear": 1916,
        "membershipFees": {
            "annual": 1800.0,
            "joiningFee": 3600.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Application and referral"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, polar exploration memorabilia",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking, historical talks",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "arcticclubseattle.com",
        "description": "A historic club celebrating Arctic explorers, with unique decor and a strong sense of community among its members.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Arctic Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 42,
        "rank": 42,
        "name": "The Tanglin Club",
        "city": "Singapore, UK",
        "establishedYear": 1865,
        "membershipFees": {
            "annual": 2400.0,
            "joiningFee": 4800.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Nationality-based membership"
            ]
        },
        "clubType": [
            "Social",
            "Cultural"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, sports facilities, guest rooms",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Cultural events, family activities",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "tanglinclub.org.sg",
        "description": "One of the oldest and most prestigious clubs in Singapore, known for its colonial charm and diverse member base.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Tanglin Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 43,
        "rank": 43,
        "name": "The Bohemian Club",
        "city": "San Francisco, UK",
        "establishedYear": 1872,
        "membershipFees": {
            "annual": 2500.0,
            "joiningFee": 5000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Arts",
            "Culture"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, accommodation, forest retreat",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Arts performances, annual retreat",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "bohemianclub.com",
        "description": "An exclusive club famous for its annual Bohemian Grove retreat and strong arts and culture focus.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 5,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Bohemian Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 44,
        "rank": 44,
        "name": "The Lotus Club",
        "city": "New York, UK",
        "establishedYear": 1870,
        "membershipFees": {
            "annual": 2100.0,
            "joiningFee": 4200.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Arts-related professions"
            ]
        },
        "clubType": [
            "Arts",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, library, gallery",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Art exhibitions, lectures",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "lotusclub.org",
        "description": "A club dedicated to the arts, providing a space for artists and patrons to gather and share their passion.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Lotus Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 45,
        "rank": 45,
        "name": "The Quadrangle Club",
        "city": "Chicago, UK",
        "establishedYear": 1893,
        "membershipFees": {
            "annual": 1850.0,
            "joiningFee": 3700.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "University affiliation required"
            ]
        },
        "clubType": [
            "Academic",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, accommodation, meeting spaces",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Academic discussions, social events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "quadrangleclub.org",
        "description": "A hub for intellectual discourse at the University of Chicago, fostering a close-knit academic community.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Quadrangle Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 46,
        "rank": 46,
        "name": "The Oxford and Cambridge Club",
        "city": "London, UK",
        "establishedYear": 1830,
        "membershipFees": {
            "annual": 2300.0,
            "joiningFee": 4600.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "University affiliation required"
            ]
        },
        "clubType": [
            "Academic",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, library, accommodation",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Lectures, networking",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "oxfordandcambridgeclub.co.uk",
        "description": "A club for alumni of Oxford and Cambridge, maintaining a tradition of academic excellence and networking.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Oxford and Cambridge Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 47,
        "rank": 47,
        "name": "The Milwaukee Club",
        "city": "Milwaukee, UK",
        "establishedYear": 1882,
        "membershipFees": {
            "annual": 1900.0,
            "joiningFee": 3800.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, guest rooms",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Business meetings, social gatherings",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "milwaukeeclub.com",
        "description": "Milwaukee's premier private club, offering an elegant setting for business leaders and social elites to congregate.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Milwaukee Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 48,
        "rank": 48,
        "name": "The Halifax Club",
        "city": "Halifax, UK",
        "establishedYear": 1862,
        "membershipFees": {
            "annual": 1400.0,
            "joiningFee": 2800.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business professionals"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, meeting rooms",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Business networking, social events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "halifaxclub.com",
        "description": "A central meeting place for Halifax's business community, known for its rich history and commitment to excellence.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Halifax Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 49,
        "rank": 49,
        "name": "The St. James's Club",
        "city": "Manchester, UK",
        "establishedYear": 1825,
        "membershipFees": {
            "annual": 1800.0,
            "joiningFee": 3600.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, accommodation, library",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking, private dinners",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "stjamesclubmanchester.co.uk",
        "description": "A discreet venue offering a blend of tradition and luxury, catering to Manchester's business and social leaders.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The St. James's Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 50,
        "rank": 50,
        "name": "The Saint George's Society",
        "city": "New York, UK",
        "establishedYear": 1770,
        "membershipFees": {
            "annual": 1700.0,
            "joiningFee": 3400.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "British heritage required"
            ]
        },
        "clubType": [
            "Cultural",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Cultural celebrations, networking",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "saintgeorgessociety.org",
        "description": "A society for individuals of British and Commonwealth descent, promoting cultural connections and philanthropy.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Saint George's Society photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 51,
        "rank": 51,
        "name": "The Rideau Club",
        "city": "Ottawa, UK",
        "establishedYear": 1865,
        "membershipFees": {
            "annual": 2000.0,
            "joiningFee": 4000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Application and referral"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, business center",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking, social events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "rideauclub.ca",
        "description": "Ottawa's oldest private club, fostering professional and social interactions among Canada's political and business elites.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Rideau Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 52,
        "rank": 52,
        "name": "The Hong Kong Club",
        "city": "Hong Kong, UK",
        "establishedYear": 1846,
        "membershipFees": {
            "annual": 2500.0,
            "joiningFee": 5000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business professionals"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, library, sports facilities",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Business networking, social events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "thehongkongclub.hk",
        "description": "A prestigious club in the heart of Hong Kong, known for its exclusive membership and colonial heritage.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Hong Kong Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 53,
        "rank": 53,
        "name": "The Union International Club",
        "city": "Frankfurt, UK",
        "establishedYear": 1959,
        "membershipFees": {
            "annual": 1800.0,
            "joiningFee": 3600.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Cultural",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, guest rooms, garden",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Cultural events, business meetings",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "unioninternationalclub.de",
        "description": "A hub for international diplomats and business leaders, offering a luxurious environment for cultural exchange.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Union International Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 54,
        "rank": 54,
        "name": "The Bengal Club",
        "city": "Kolkata, UK",
        "establishedYear": 1827,
        "membershipFees": {
            "annual": 1500.0,
            "joiningFee": 3000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Application and interview"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, library",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Social gatherings, cultural events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "bengalclub.com",
        "description": "One of India's oldest clubs, known for its historical significance and role in Kolkata's social scene.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Bengal Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 55,
        "rank": 55,
        "name": "The Travellers Club",
        "city": "London, UK",
        "establishedYear": 1819,
        "membershipFees": {
            "annual": 2400.0,
            "joiningFee": 4800.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, library, accommodation",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Lectures, travel talks",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "thetravellersclub.org.uk",
        "description": "A club for those with a keen interest in travel and geography, offering a sophisticated setting for discussion and dining.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Travellers Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 56,
        "rank": 56,
        "name": "The Reform Club",
        "city": "London, UK",
        "establishedYear": 1836,
        "membershipFees": {
            "annual": 3000.0,
            "joiningFee": 6000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation based on merit"
            ]
        },
        "clubType": [
            "Political",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, library, accommodation",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Debates, literary evenings",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "reformclub.com",
        "description": "Famed for its association with historical political figures, offering a rich program of events and luxurious amenities.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Reform Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 57,
        "rank": 57,
        "name": "The Pacific Club",
        "city": "Honolulu, UK",
        "establishedYear": 1851,
        "membershipFees": {
            "annual": 2100.0,
            "joiningFee": 4200.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business and social leaders"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, fitness center, pool",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking, family events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "thepacificclub.org",
        "description": "A premier private club in Hawaii, known for its welcoming atmosphere and commitment to service and community.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Pacific Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 58,
        "rank": 58,
        "name": "The Cliff Dwellers Club",
        "city": "Chicago, UK",
        "establishedYear": 1907,
        "membershipFees": {
            "annual": 1650.0,
            "joiningFee": 3300.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Artists and patrons of arts"
            ]
        },
        "clubType": [
            "Arts",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, gallery, studio spaces",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Art exhibitions, performances",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "cliff-chicago.org",
        "description": "A club dedicated to supporting the arts, providing a space for artists to gather and share their work in a communal setting.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Cliff Dwellers Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 59,
        "rank": 59,
        "name": "The Kelvin Club",
        "city": "Melbourne, UK",
        "establishedYear": 1865,
        "membershipFees": {
            "annual": 1400.0,
            "joiningFee": 2800.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Application and referral"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, meeting rooms",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Business meetings, social events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "kelvinclub.com",
        "description": "A boutique private club nestled in Melbourne's laneways, offering a discreet and elegant environment for its members.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Kelvin Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 60,
        "rank": 60,
        "name": "The Chicago Club",
        "city": "Chicago, UK",
        "establishedYear": 1869,
        "membershipFees": {
            "annual": 3200.0,
            "joiningFee": 6400.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, accommodation, fitness center",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking, cultural lectures",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "thechicagoclub.org",
        "description": "One of Chicago's most prestigious clubs, renowned for its exclusivity and high standards of hospitality and service.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Chicago Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 61,
        "rank": 61,
        "name": "The Aero Club of East Africa",
        "city": "Nairobi, UK",
        "establishedYear": 1927,
        "membershipFees": {
            "annual": 1000.0,
            "joiningFee": 2000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Aviators and aviation enthusiasts"
            ]
        },
        "clubType": [
            "Social",
            "Aviation"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, flight simulator",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Aviation-related events, networking",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "aeroclubea.com",
        "description": "Dedicated to aviation enthusiasts, providing a unique meeting place for pilots and those interested in aviation history.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 5,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Aero Club of East Africa photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 62,
        "rank": 62,
        "name": "The Royal Automobile Club",
        "city": "London, UK",
        "establishedYear": 1897,
        "membershipFees": {
            "annual": 2850.0,
            "joiningFee": 5700.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Car enthusiasts"
            ]
        },
        "clubType": [
            "Social",
            "Automotive"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, gym, pool, driving simulator",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Car shows, driving tours",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "therac.co.uk",
        "description": "A historic club for automobile enthusiasts, offering a wide range of amenities and events related to motoring.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Royal Automobile Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 63,
        "rank": 63,
        "name": "The Toronto Club",
        "city": "Toronto, UK",
        "establishedYear": 1837,
        "membershipFees": {
            "annual": 3000.0,
            "joiningFee": 6000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, accommodation",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Business networking, social gatherings",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "thetorontoclub.com",
        "description": "Toronto's oldest private club, known for its discretion and as a meeting place for Canada's business elite.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Toronto Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 64,
        "rank": 64,
        "name": "The Walbrook Club",
        "city": "London, UK",
        "establishedYear": 2000,
        "membershipFees": {
            "annual": 2500.0,
            "joiningFee": 5000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Finance professionals"
            ]
        },
        "clubType": [
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, meeting rooms",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Finance sector networking events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "thewalbrookclub.com",
        "description": "A modern private club catering to professionals from the financial sector, with a focus on privacy and exclusivity.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Walbrook Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 65,
        "rank": 65,
        "name": "The Norwood Club",
        "city": "New York, UK",
        "establishedYear": 2007,
        "membershipFees": {
            "annual": 2000.0,
            "joiningFee": 4000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Creatives and artists"
            ]
        },
        "clubType": [
            "Arts",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, studios, theater",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Art exhibitions, performances",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "norwoodclub.com",
        "description": "A dynamic social club for the arts community, providing a space for creative collaboration and cultural events.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Norwood Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 66,
        "rank": 66,
        "name": "The Australian Club",
        "city": "Sydney, UK",
        "establishedYear": 1838,
        "membershipFees": {
            "annual": 2200.0,
            "joiningFee": 4400.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, billiards",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Business networking, social events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "australianclub.com.au",
        "description": "A distinguished club in Sydney, offering a traditional environment for professional networking and social engagement.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Australian Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 67,
        "rank": 67,
        "name": "The Naval and Military Club",
        "city": "London, UK",
        "establishedYear": 1862,
        "membershipFees": {
            "annual": 2100.0,
            "joiningFee": 4200.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Military or related professions"
            ]
        },
        "clubType": [
            "Military",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, accommodation, library",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Military history talks, social events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "navalandmilitaryclub.co.uk",
        "description": "Known as 'The In & Out,' this club provides a haven for those from military backgrounds, emphasizing tradition and service.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Naval and Military Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 68,
        "rank": 68,
        "name": "The Sloane Club",
        "city": "London, UK",
        "establishedYear": 1932,
        "membershipFees": {
            "annual": 2300.0,
            "joiningFee": 4600.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Application and referral"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, accommodation, spa",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Private events, dining",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "sloaneclub.co.uk",
        "description": "An exclusive club in Chelsea, offering luxury accommodations and facilities for a discerning clientele.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Sloane Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 69,
        "rank": 69,
        "name": "The Lyceum Club",
        "city": "Melbourne, UK",
        "establishedYear": 1912,
        "membershipFees": {
            "annual": 1600.0,
            "joiningFee": 3200.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Women professionals"
            ]
        },
        "clubType": [
            "Cultural",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Library, dining, art gallery",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Lectures, art exhibitions",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "lyceumclubmelb.org.au",
        "description": "A cultural hub for women, fostering education and the arts within a supportive community environment.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Lyceum Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 70,
        "rank": 70,
        "name": "The Mount Royal Club",
        "city": "Montreal, UK",
        "establishedYear": 1899,
        "membershipFees": {
            "annual": 2000.0,
            "joiningFee": 4000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business and social leaders"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, library, meeting rooms",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking, cultural events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "mountroyalclub.com",
        "description": "One of Montreal's oldest private clubs, known for its refined atmosphere and a commitment to business and social affairs.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Mount Royal Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 71,
        "rank": 71,
        "name": "The Century Association",
        "city": "New York, UK",
        "establishedYear": 1847,
        "membershipFees": {
            "annual": 2500.0,
            "joiningFee": 5000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Arts and letters professionals"
            ]
        },
        "clubType": [
            "Arts",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Library, dining, art gallery",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Literary readings, art shows",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "centuryassociation.org",
        "description": "A club for the promotion of arts and literature, fostering a deep engagement with the arts through events and gatherings.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Century Association photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 72,
        "rank": 72,
        "name": "The Garrick Club",
        "city": "London, UK",
        "establishedYear": 1831,
        "membershipFees": {
            "annual": 2400.0,
            "joiningFee": 4800.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Theatrical and arts community"
            ]
        },
        "clubType": [
            "Arts",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, library",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Theatre visits, lectures",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "garrickclub.co.uk",
        "description": "Dedicated to drama and the arts, this club serves as a historical hub for artists and patrons with a rich theatrical heritage.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Garrick Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 73,
        "rank": 73,
        "name": "The Union League Club",
        "city": "New York, UK",
        "establishedYear": 1863,
        "membershipFees": {
            "annual": 3000.0,
            "joiningFee": 6000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Civic and community leaders"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, fitness center, accommodations",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Civic programs, social events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "unionleague.org",
        "description": "Known for its civic mission, this club promotes social engagement and offers extensive facilities and programs.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Union League Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 74,
        "rank": 74,
        "name": "The National Arts Club",
        "city": "New York, UK",
        "establishedYear": 1898,
        "membershipFees": {
            "annual": 1800.0,
            "joiningFee": 3600.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Artists and patrons of arts"
            ]
        },
        "clubType": [
            "Arts",
            "Culture"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, art studios, galleries",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Art exhibitions, performances",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "nationalartsclub.org",
        "description": "Celebrating the arts, this club provides creatives with resources and a platform to showcase their work in a historic setting.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The National Arts Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 75,
        "rank": 75,
        "name": "The Algonquin Club",
        "city": "Boston, UK",
        "establishedYear": 1886,
        "membershipFees": {
            "annual": 2000.0,
            "joiningFee": 4000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business and professional leaders"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, library, guest rooms",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking events, dinners",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "algonquinclub.com",
        "description": "A traditional club that serves Boston's elite, offering a refined space for professional gatherings and social affairs.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Algonquin Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 76,
        "rank": 76,
        "name": "The Royal Sydney Yacht Squadron",
        "city": "Sydney, UK",
        "establishedYear": 1862,
        "membershipFees": {
            "annual": 1900.0,
            "joiningFee": 3800.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Sailing enthusiasts"
            ]
        },
        "clubType": [
            "Yachting",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Marina, dining, bar",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Regattas, sailing training",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "rsys.com.au",
        "description": "A prestigious yachting club offering members sailing activities and social events in an exclusive setting.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Royal Sydney Yacht Squadron photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 77,
        "rank": 77,
        "name": "The Commerce Club",
        "city": "Atlanta, UK",
        "establishedYear": 1964,
        "membershipFees": {
            "annual": 2100.0,
            "joiningFee": 4200.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business professionals"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, meeting rooms, bar",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Business networking, seminars",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "commerceclubatlanta.com",
        "description": "A central hub for Atlanta's business community, this club emphasizes professional development and connections.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Commerce Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 78,
        "rank": 78,
        "name": "The Yale Club of New York City",
        "city": "New York, UK",
        "establishedYear": 1897,
        "membershipFees": {
            "annual": 2000.0,
            "joiningFee": 4000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Yale University affiliates"
            ]
        },
        "clubType": [
            "Academic",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, accommodations, fitness center",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Lectures, reunions",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "yaleclubnyc.org",
        "description": "Exclusive to Yale alumni, providing a home base in NYC with extensive facilities and a strong community spirit.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Yale Club of New York City photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 79,
        "rank": 79,
        "name": "The New Club",
        "city": "Edinburgh, UK",
        "establishedYear": 1787,
        "membershipFees": {
            "annual": 1800.0,
            "joiningFee": 3600.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Application and referral"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, accommodation, fitness suite",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Social gatherings, cultural events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "newclub.co.uk",
        "description": "One of Scotland's oldest and most venerable private clubs, known for its rich history and vibrant member activities.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The New Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 80,
        "rank": 80,
        "name": "The Athenaeum",
        "city": "Liverpool, UK",
        "establishedYear": 1797,
        "membershipFees": {
            "annual": 1700.0,
            "joiningFee": 3400.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Cultural",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Library, dining",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Lectures, book clubs",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "theathenaeum.org.uk",
        "description": "A distinguished club fostering intellectual life, focusing on literature, science, and the arts.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Athenaeum photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 81,
        "rank": 81,
        "name": "The Arts and Letters Club of Toronto",
        "city": "Toronto, UK",
        "establishedYear": 1908,
        "membershipFees": {
            "annual": 1600.0,
            "joiningFee": 3200.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Artists, writers, performers"
            ]
        },
        "clubType": [
            "Arts",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, studio, gallery",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Artistic performances, exhibitions",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "artsandlettersclub.ca",
        "description": "A cultural haven for creatives, offering a supportive environment for artistic endeavors and social interactions.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Arts and Letters Club of Toronto photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 82,
        "rank": 82,
        "name": "The Melbourne Club",
        "city": "Melbourne, UK",
        "establishedYear": 1838,
        "membershipFees": {
            "annual": 2000.0,
            "joiningFee": 4000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business leaders"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, accommodations",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Business networking, private dinners",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "melbourneclub.com.au",
        "description": "An elite institution reflecting Melbourne's commercial and social elite, offering a prestigious and discreet meeting place.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Melbourne Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 83,
        "rank": 83,
        "name": "The Western Australian Club",
        "city": "Perth, UK",
        "establishedYear": 1893,
        "membershipFees": {
            "annual": 1500.0,
            "joiningFee": 3000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business and professional leaders"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, meeting rooms",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Professional networking, social events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "waclub.com.au",
        "description": "A premier venue for professionals in Perth, emphasizing networking, culture, and refined social engagement.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Western Australian Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 84,
        "rank": 84,
        "name": "The George Town Club",
        "city": "Washington, D.C., UK",
        "establishedYear": 1966,
        "membershipFees": {
            "annual": 2300.0,
            "joiningFee": 4600.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, accommodations",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking events, social gatherings",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "gtownclub.com",
        "description": "Nestled in historic Georgetown, this club is a local meeting spot for political and social discourse.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The George Town Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 85,
        "rank": 85,
        "name": "The California Yacht Club",
        "city": "Los Angeles, UK",
        "establishedYear": 1922,
        "membershipFees": {
            "annual": 1800.0,
            "joiningFee": 3600.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Yachting enthusiasts"
            ]
        },
        "clubType": [
            "Yachting",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Marina, dining, pool",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Regattas, social events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "calyachtclub.com",
        "description": "Renowned for its active sailing schedule and social calendar, fostering a community of maritime enthusiasts.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The California Yacht Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 86,
        "rank": 86,
        "name": "The Winnipeg Winter Club",
        "city": "Winnipeg, UK",
        "establishedYear": 1911,
        "membershipFees": {
            "annual": 1500.0,
            "joiningFee": 3000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Application and referral"
            ]
        },
        "clubType": [
            "Sports",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Ice rinks, dining, fitness center",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Sporting events, family activities",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "winnipegwinterclub.com",
        "description": "A sports-oriented club offering a range of activities in a family-friendly environment, from ice sports to swimming.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 5,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Winnipeg Winter Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 87,
        "rank": 87,
        "name": "The Hamilton Club",
        "city": "Hamilton, UK",
        "establishedYear": 1873,
        "membershipFees": {
            "annual": 1800.0,
            "joiningFee": 3600.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business professionals"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, library",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Business meetings, social events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "thehamiltonclub.com",
        "description": "A historic venue in Hamilton, providing a sophisticated space for business interactions and socializing.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Hamilton Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 88,
        "rank": 88,
        "name": "The University Club of Portland",
        "city": "Portland, UK",
        "establishedYear": 1898,
        "membershipFees": {
            "annual": 1950.0,
            "joiningFee": 3900.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "University graduates"
            ]
        },
        "clubType": [
            "Academic",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, fitness center, library",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Alumni gatherings, lectures",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "uclubpdx.com",
        "description": "A community for university alumni and scholars, emphasizing lifelong learning and networking in an academic setting.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The University Club of Portland photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 89,
        "rank": 89,
        "name": "The Duquesne Club",
        "city": "Pittsburgh, UK",
        "establishedYear": 1873,
        "membershipFees": {
            "annual": 2250.0,
            "joiningFee": 4500.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business leaders"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, accommodations, fitness center",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking events, cultural gatherings",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "duquesne.org",
        "description": "Known as Pittsburgh's top business club, it stands out for its luxury services and as a central business networking hub.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Duquesne Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 90,
        "rank": 90,
        "name": "The Kansas City Club",
        "city": "Kansas City, UK",
        "establishedYear": 1882,
        "membershipFees": {
            "annual": 1600.0,
            "joiningFee": 3200.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Application and interview"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, fitness center",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Social events, business networking",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "kccclub.com",
        "description": "A key institution in Kansas City, known for fostering business connections and hosting premier social events.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Kansas City Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 91,
        "rank": 91,
        "name": "The Union Club of Cleveland",
        "city": "Cleveland, UK",
        "establishedYear": 1872,
        "membershipFees": {
            "annual": 2000.0,
            "joiningFee": 4000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, fitness center, accommodations",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Business networking, social events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "theunionclub.org",
        "description": "A historic club with a reputation for excellence, providing a prestigious gathering place for Cleveland's elite.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Union Club of Cleveland photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 92,
        "rank": 92,
        "name": "The Missouri Athletic Club",
        "city": "St. Louis, UK",
        "establishedYear": 1903,
        "membershipFees": {
            "annual": 1900.0,
            "joiningFee": 3800.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Sports enthusiasts"
            ]
        },
        "clubType": [
            "Sports",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, sports facilities, accommodations",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Sporting events, family activities",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "mac-stl.org",
        "description": "Dedicated to sports and wellness, this club offers extensive athletic facilities and a strong community environment.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Missouri Athletic Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 93,
        "rank": 93,
        "name": "The Vancouver Rowing Club",
        "city": "Vancouver, UK",
        "establishedYear": 1886,
        "membershipFees": {
            "annual": 1400.0,
            "joiningFee": 2800.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Rowing enthusiasts"
            ]
        },
        "clubType": [
            "Sports",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Marina, dining, bar",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Regattas, rowing training",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "vancouverrowingclub.ca",
        "description": "A focal point for rowing and sailing in Vancouver, promoting water sports and hosting competitive and social activities.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Vancouver Rowing Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 94,
        "rank": 94,
        "name": "The Princeton Club of New York",
        "city": "New York, UK",
        "establishedYear": 1901,
        "membershipFees": {
            "annual": 2100.0,
            "joiningFee": 4200.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Princeton University affiliates"
            ]
        },
        "clubType": [
            "Academic",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, accommodations, library",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Alumni events, lectures",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "princetonclub.com",
        "description": "An exclusive enclave for Princeton alumni, offering a home in NYC for academic engagement and socializing.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Princeton Club of New York photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 95,
        "rank": 95,
        "name": "The Halifax Club",
        "city": "Halifax, UK",
        "establishedYear": 1862,
        "membershipFees": {
            "annual": 1500.0,
            "joiningFee": 3000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business and social leaders"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, accommodations",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking, cultural events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "halifaxclub.ca",
        "description": "A prestigious club known for its long-standing tradition of serving as a central social and business hub in Halifax.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Halifax Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 96,
        "rank": 96,
        "name": "The Royal Ocean Racing Club",
        "city": "London, UK",
        "establishedYear": 1925,
        "membershipFees": {
            "annual": 1800.0,
            "joiningFee": 3600.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Sailing professionals"
            ]
        },
        "clubType": [
            "Yachting",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, accommodations, bar",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Sailing events, races",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "rorc.org",
        "description": "Esteemed for its dedication to ocean racing and sailing, providing members with a platform for competitive sailing.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Royal Ocean Racing Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 97,
        "rank": 97,
        "name": "The Oxford Club",
        "city": "Baltimore, UK",
        "establishedYear": 1991,
        "membershipFees": {
            "annual": 1700.0,
            "joiningFee": 3400.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business and finance professionals"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, meeting rooms",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Finance seminars, social events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "oxfordclub.com",
        "description": "A private club focusing on investment strategies and financial education, connecting professionals across industries.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Oxford Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 98,
        "rank": 98,
        "name": "The Portland Club",
        "city": "Portland, UK",
        "establishedYear": 1886,
        "membershipFees": {
            "annual": 1600.0,
            "joiningFee": 3200.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Social",
            "Cultural"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, library, game rooms",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Social gatherings, game nights",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "theportlandclub.org",
        "description": "A long-standing social club with a focus on cultural enrichment and traditional games, fostering a sense of community.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Portland Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 99,
        "rank": 99,
        "name": "The Adventurers' Club of Los Angeles",
        "city": "Los Angeles, UK",
        "establishedYear": 1921,
        "membershipFees": {
            "annual": 1500.0,
            "joiningFee": 3000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Adventurers and explorers"
            ]
        },
        "clubType": [
            "Adventure",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Bar, museum artifacts",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Speaker events, exploration discussions",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "adventurersclub.org",
        "description": "Catering to those with a passion for adventure and discovery, hosting events to share tales of exploration and adventure.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 5,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Adventurers' Club of Los Angeles photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 100,
        "rank": 100,
        "name": "The Rand Club",
        "city": "Johannesburg, UK",
        "establishedYear": 1887,
        "membershipFees": {
            "annual": 1400.0,
            "joiningFee": 2800.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Application and referral"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, accommodations",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking events, cultural gatherings",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "randclub.co.za",
        "description": "A symbol of Johannesburg's historical and social development, offering an elegant setting for business and socializing.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Rand Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 101,
        "rank": 101,
        "name": "The Capital Club",
        "city": "Nairobi, UK",
        "establishedYear": 2007,
        "membershipFees": {
            "annual": 1800.0,
            "joiningFee": 3600.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business professionals"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, meeting rooms",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking, conferences",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "capitalclubnairobi.com",
        "description": "A premier business club in East Africa, providing a sophisticated setting for professional growth and social engagement.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Capital Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 102,
        "rank": 102,
        "name": "The University Club of Toronto",
        "city": "Toronto, UK",
        "establishedYear": 1906,
        "membershipFees": {
            "annual": 2000.0,
            "joiningFee": 4000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "University graduates"
            ]
        },
        "clubType": [
            "Academic",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, library, fitness center",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Lectures, alumni gatherings",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "universitycluboftoronto.com",
        "description": "A haven for academic professionals, offering a conducive environment for intellectual discourse and social activities.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The University Club of Toronto photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 103,
        "rank": 103,
        "name": "The Lansdowne Club",
        "city": "London, UK",
        "establishedYear": 1935,
        "membershipFees": {
            "annual": 2300.0,
            "joiningFee": 4600.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Application and referral"
            ]
        },
        "clubType": [
            "Social",
            "Sports"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Fitness center, dining, squash courts",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Social events, sports competitions",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "lansdowneclub.com",
        "description": "A unique blend of social and athletic facilities, catering to members with a taste for leisure and competitive sports.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Lansdowne Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 104,
        "rank": 104,
        "name": "The City Club of San Francisco",
        "city": "San Francisco, UK",
        "establishedYear": 1890,
        "membershipFees": {
            "annual": 2400.0,
            "joiningFee": 4800.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, fitness center, meeting rooms",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking events, social gatherings",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "cityclubsf.com",
        "description": "Located in the heart of the Financial District, offering luxurious amenities and exclusive business networking opportunities.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The City Club of San Francisco photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 105,
        "rank": 105,
        "name": "The Kelvin Club",
        "city": "Melbourne, UK",
        "establishedYear": 1865,
        "membershipFees": {
            "annual": 1600.0,
            "joiningFee": 3200.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Application and referral"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, library",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Private events, networking",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "kelvinclub.com.au",
        "description": "A historic Melbourne institution, known for its refined atmosphere and strong community ties across varied professions.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Kelvin Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 106,
        "rank": 106,
        "name": "The Bellevue Club",
        "city": "Oakland, UK",
        "establishedYear": 1929,
        "membershipFees": {
            "annual": 2500.0,
            "joiningFee": 5000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Social",
            "Fitness"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Spa, dining, fitness center",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Wellness events, social activities",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "bellevueclub.com",
        "description": "A private retreat offering state-of-the-art wellness facilities and a range of social and recreational activities.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Bellevue Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 107,
        "rank": 107,
        "name": "The Cliff Dwellers",
        "city": "Chicago, UK",
        "establishedYear": 1907,
        "membershipFees": {
            "annual": 1500.0,
            "joiningFee": 3000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Artists and patrons of arts"
            ]
        },
        "clubType": [
            "Arts",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, gallery",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Art exhibitions, lectures",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "cliff-chicago.org",
        "description": "A cultural enclave high above Michigan Avenue, dedicated to artists and their supporters within the Chicago community.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Cliff Dwellers photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 108,
        "rank": 108,
        "name": "The Nottingham Club",
        "city": "Nottingham, UK",
        "establishedYear": 1923,
        "membershipFees": {
            "annual": 1700.0,
            "joiningFee": 3400.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business professionals"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking, cultural dinners",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "thenottinghamclub.co.uk",
        "description": "A prestigious club in the heart of Nottingham, offering an exclusive environment for professional and social interaction.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Nottingham Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 109,
        "rank": 109,
        "name": "The Weld Club",
        "city": "Perth, UK",
        "establishedYear": 1871,
        "membershipFees": {
            "annual": 2000.0,
            "joiningFee": 4000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, accommodation",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Business meetings, social events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "weldclub.org.au",
        "description": "One of Western Australia's oldest clubs, it upholds a tradition of exclusivity and privacy in a classic setting.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Weld Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 110,
        "rank": 110,
        "name": "The Squadron Auckland",
        "city": "Auckland, UK",
        "establishedYear": 1858,
        "membershipFees": {
            "annual": 1900.0,
            "joiningFee": 3800.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Sailing enthusiasts"
            ]
        },
        "clubType": [
            "Yachting",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Marina, dining, bar",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Sailing regattas, social events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "squadron.org.nz",
        "description": "A focal point for sailing in New Zealand, offering top facilities and a vibrant community for seafaring members.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Squadron Auckland photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 111,
        "rank": 111,
        "name": "The Newcastle Club",
        "city": "Newcastle, UK",
        "establishedYear": 1885,
        "membershipFees": {
            "annual": 1500.0,
            "joiningFee": 3000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business leaders"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, library",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking, community events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "newcastleclub.com.au",
        "description": "An exclusive gathering place for Newcastle's elite, fostering a sense of community and longstanding tradition.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Newcastle Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 112,
        "rank": 112,
        "name": "The Buffalo Club",
        "city": "Buffalo, UK",
        "establishedYear": 1867,
        "membershipFees": {
            "annual": 1800.0,
            "joiningFee": 3600.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, accommodations",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Private events, networking",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "buffaloclub.org",
        "description": "A key institution in Buffalo, known for its luxurious setting and as a meeting place for the city's influential figures.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Buffalo Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 113,
        "rank": 113,
        "name": "The Union Club of British Columbia",
        "city": "Victoria, UK",
        "establishedYear": 1879,
        "membershipFees": {
            "annual": 1600.0,
            "joiningFee": 3200.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, library",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Social gatherings, business meetings",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "unionclub.com",
        "description": "An iconic club with a British heritage, known for its sophisticated atmosphere and vibrant member activities.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Union Club of British Columbia photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 114,
        "rank": 114,
        "name": "The Stephen's Green Hibernian Club",
        "city": "Dublin, UK",
        "establishedYear": 1840,
        "membershipFees": {
            "annual": 2100.0,
            "joiningFee": 4200.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business professionals"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, meeting rooms",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking, cultural events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "sghc.ie",
        "description": "A distinguished Dublin club, providing an elegant backdrop for professional networking and social engagements.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Stephen's Green Hibernian Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 115,
        "rank": 115,
        "name": "The Kansas City Club",
        "city": "Kansas City, UK",
        "establishedYear": 1882,
        "membershipFees": {
            "annual": 2000.0,
            "joiningFee": 4000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business and community leaders"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, fitness center, spa",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking events, gala dinners",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "kccclub.org",
        "description": "A storied institution fostering connections among Kansas City's business community in a historic and luxurious setting.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Kansas City Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 116,
        "rank": 116,
        "name": "The Wanganui Club",
        "city": "Wanganui, UK",
        "establishedYear": 1892,
        "membershipFees": {
            "annual": 1400.0,
            "joiningFee": 2800.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Community leaders"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Social events, community meetings",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "No Website Available",
        "description": "A club deeply rooted in community and tradition, serving as a central meeting point for social and business interactions.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Wanganui Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 117,
        "rank": 117,
        "name": "The Ulster Reform Club",
        "city": "Belfast, UK",
        "establishedYear": 1885,
        "membershipFees": {
            "annual": 1700.0,
            "joiningFee": 3400.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Application and referral"
            ]
        },
        "clubType": [
            "Social",
            "Political"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, library, snooker room",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Debates, private events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "ulsterreformclub.com",
        "description": "An influential club in Northern Ireland, known for its intellectual environment and political discourse.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Ulster Reform Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 118,
        "rank": 118,
        "name": "The Vancouver Club",
        "city": "Vancouver, UK",
        "establishedYear": 1889,
        "membershipFees": {
            "annual": 2500.0,
            "joiningFee": 5000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business and social leaders"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, fitness center, wine cellar",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking, cultural events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "thevancouverclub.ca",
        "description": "A prestigious club blending traditional elegance with modern amenities, serving as a hub for Vancouver's elite.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Vancouver Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 119,
        "rank": 119,
        "name": "The Los Angeles Athletic Club",
        "city": "Los Angeles, UK",
        "establishedYear": 1880,
        "membershipFees": {
            "annual": 2200.0,
            "joiningFee": 4400.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Sports enthusiasts"
            ]
        },
        "clubType": [
            "Sports",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, sports facilities, accommodations",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Athletic events, social gatherings",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "laac.com",
        "description": "A club dedicated to physical wellness and social activities, providing a comprehensive athletic and social experience.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Los Angeles Athletic Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 120,
        "rank": 120,
        "name": "The Oxford Club",
        "city": "Manchester, UK",
        "establishedYear": 1871,
        "membershipFees": {
            "annual": 1800.0,
            "joiningFee": 3600.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business and cultural leaders"
            ]
        },
        "clubType": [
            "Business",
            "Cultural"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, library, art gallery",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Cultural events, networking",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "oxfordclub.org.uk",
        "description": "An esteemed venue fostering a unique blend of business and cultural interactions among Manchester's professional class.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Oxford Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 121,
        "rank": 121,
        "name": "The Long Room Club",
        "city": "Melbourne, UK",
        "establishedYear": 1851,
        "membershipFees": {
            "annual": 1900.0,
            "joiningFee": 3800.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Sports enthusiasts"
            ]
        },
        "clubType": [
            "Sports",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, sports viewing areas",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Match viewings, member events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "melbournecricketclub.com.au",
        "description": "An iconic sports club located within the Melbourne Cricket Ground, providing premier sports entertainment and facilities.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Long Room Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 122,
        "rank": 122,
        "name": "The Royal Canadian Military Institute",
        "city": "Toronto, UK",
        "establishedYear": 1890,
        "membershipFees": {
            "annual": 1600.0,
            "joiningFee": 3200.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Military professionals"
            ]
        },
        "clubType": [
            "Military",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, library, museum",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Military history talks, social events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "rcmi.org",
        "description": "A hub for military history enthusiasts, offering resources and events dedicated to the appreciation of Canada's military.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Royal Canadian Military Institute photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 123,
        "rank": 123,
        "name": "The Union and University Club of British Columbia",
        "city": "Victoria, UK",
        "establishedYear": 1879,
        "membershipFees": {
            "annual": 1700.0,
            "joiningFee": 3400.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Academic",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, library, accommodations",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Academic gatherings, social events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "uuclub.ca",
        "description": "A club with a rich academic and social tradition, fostering intellectual and cultural pursuits among members.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Union and University Club of British Columbia photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 124,
        "rank": 124,
        "name": "The Flyfishers' Club",
        "city": "London, UK",
        "establishedYear": 1884,
        "membershipFees": {
            "annual": 1500.0,
            "joiningFee": 3000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Fly fishing enthusiasts"
            ]
        },
        "clubType": [
            "Sports",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, library",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Fishing trips, lectures",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "flyfishersclub.org.uk",
        "description": "A niche club uniting fly fishing aficionados, providing a community for sharing knowledge and organizing fishing outings.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Flyfishers' Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 125,
        "rank": 125,
        "name": "The National Club",
        "city": "Toronto, UK",
        "establishedYear": 1874,
        "membershipFees": {
            "annual": 2300.0,
            "joiningFee": 4600.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business professionals"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, accommodations, bar",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Business networking, social events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "thenationalclub.com",
        "description": "A cornerstone of Toronto's business community, known for its tradition of influence and hospitality.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The National Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 126,
        "rank": 126,
        "name": "The Somerset Club",
        "city": "Boston, UK",
        "establishedYear": 1852,
        "membershipFees": {
            "annual": 2100.0,
            "joiningFee": 4200.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, library",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Private events, social gatherings",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "somersetclub.org",
        "description": "A quintessential Bostonian club, steeped in tradition and exclusivity, hosting refined social and business events.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Somerset Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 127,
        "rank": 127,
        "name": "The Geelong Club",
        "city": "Geelong, UK",
        "establishedYear": 1859,
        "membershipFees": {
            "annual": 1400.0,
            "joiningFee": 2800.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Local community leaders"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, meeting rooms",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Social events, networking",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "geelongclub.com.au",
        "description": "An esteemed club serving the Geelong community, providing a sophisticated setting for social and business interactions.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Geelong Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 128,
        "rank": 128,
        "name": "The Singapore Island Country Club",
        "city": "Singapore, UK",
        "establishedYear": 1891,
        "membershipFees": {
            "annual": 2600.0,
            "joiningFee": 5200.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Sports enthusiasts"
            ]
        },
        "clubType": [
            "Sports",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Golf courses, dining, sports facilities",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Golf tournaments, family activities",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "sicc.org.sg",
        "description": "Asia's most prestigious country club, offering exceptional golf and country club facilities to its members.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Singapore Island Country Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 129,
        "rank": 129,
        "name": "The Hong Kong Football Club",
        "city": "Hong Kong, UK",
        "establishedYear": 1886,
        "membershipFees": {
            "annual": 2000.0,
            "joiningFee": 4000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Sports enthusiasts"
            ]
        },
        "clubType": [
            "Sports",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Sports facilities, dining, bar",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Sports events, social gatherings",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "hkfc.com.hk",
        "description": "Renowned for its sports facilities and vibrant social scene, it's a central hub for sports enthusiasts in Hong Kong.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Hong Kong Football Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 130,
        "rank": 130,
        "name": "The Farmers Club",
        "city": "London, UK",
        "establishedYear": 1842,
        "membershipFees": {
            "annual": 1900.0,
            "joiningFee": 3800.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Agriculture sector professionals"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, accommodations",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Industry talks, social events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "thefarmersclub.com",
        "description": "Dedicated to those in the agricultural sector, providing a venue for professional networking and social engagement.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Farmers Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 131,
        "rank": 131,
        "name": "The Arts Club Dubai",
        "city": "Dubai, UK",
        "establishedYear": 2019,
        "membershipFees": {
            "annual": 3000.0,
            "joiningFee": 6000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Arts professionals"
            ]
        },
        "clubType": [
            "Arts",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, art galleries, workspace",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Art exhibitions, cultural events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "theartsclub.ae",
        "description": "An exclusive venue for creatives in the Middle East, offering a space for artistic collaboration and cultural appreciation.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Arts Club Dubai photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 132,
        "rank": 132,
        "name": "The Battery Atlanta",
        "city": "Atlanta, UK",
        "establishedYear": 2017,
        "membershipFees": {
            "annual": 2500.0,
            "joiningFee": 5000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Application and referral"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, private suites, sports viewing areas",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking, sports events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "batteryatl.com",
        "description": "Located near the Braves stadium, this club offers a luxury experience for sports fans and business networking alike.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Battery Atlanta photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 133,
        "rank": 133,
        "name": "The Petroleum Club of Houston",
        "city": "Houston, UK",
        "establishedYear": 1946,
        "membershipFees": {
            "annual": 2000.0,
            "joiningFee": 4000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Energy sector professionals"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, meeting rooms",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Industry seminars, social events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "pcoh.com",
        "description": "A hub for Houston's energy sector, providing members with networking opportunities in a prestigious setting.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Petroleum Club of Houston photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 134,
        "rank": 134,
        "name": "The Bengaluru Club",
        "city": "Bengaluru, UK",
        "establishedYear": 1868,
        "membershipFees": {
            "annual": 1500.0,
            "joiningFee": 3000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, sports facilities",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Cultural events, sports tournaments",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "bengaluruclub.com",
        "description": "One of India's oldest clubs, known for its colonial architecture and vibrant social life among Bengaluru's elite.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Bengaluru Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 135,
        "rank": 135,
        "name": "The Western Club",
        "city": "Glasgow, UK",
        "establishedYear": 1825,
        "membershipFees": {
            "annual": 1700.0,
            "joiningFee": 3400.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business professionals"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, meeting rooms",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking events, whisky tastings",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "westernclub.co.uk",
        "description": "A prestigious club in Glasgow offering members a traditional Scottish experience with a modern business focus.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Western Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 136,
        "rank": 136,
        "name": "The Union League of Philadelphia",
        "city": "Philadelphia, UK",
        "establishedYear": 1862,
        "membershipFees": {
            "annual": 3500.0,
            "joiningFee": 7000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Civic, business leaders"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, library, fitness center",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Civic programs, networking",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "unionleague.org",
        "description": "Steeped in American history, this club promotes civic responsibility and business networking in an elegant, historical setting.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Union League of Philadelphia photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 137,
        "rank": 137,
        "name": "The Karachi Club",
        "city": "Karachi, UK",
        "establishedYear": 1907,
        "membershipFees": {
            "annual": 1600.0,
            "joiningFee": 3200.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business and social leaders"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, sports facilities",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking events, family activities",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "karachiclub.org",
        "description": "Serving as a central social hub in Karachi, it offers a range of facilities for families and professionals alike.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Karachi Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 138,
        "rank": 138,
        "name": "The Circulo de Bellas Artes",
        "city": "Madrid, UK",
        "establishedYear": 1880,
        "membershipFees": {
            "annual": 1800.0,
            "joiningFee": 3600.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Artists and patrons of arts"
            ]
        },
        "clubType": [
            "Cultural",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Art studios, theater",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Art shows, theatrical performances",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "circulobellasartes.com",
        "description": "A cultural institution in Madrid, dedicated to supporting and promoting the arts through exhibitions and performances.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Circulo de Bellas Artes photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 139,
        "rank": 139,
        "name": "The Salmagundi Club",
        "city": "New York, UK",
        "establishedYear": 1871,
        "membershipFees": {
            "annual": 2100.0,
            "joiningFee": 4200.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Artists and art lovers"
            ]
        },
        "clubType": [
            "Arts",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Art galleries, dining",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Art exhibitions, workshops",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "salmagundi.org",
        "description": "A historic art club in New York City, fostering artistic creativity and offering members a space to exhibit and collaborate.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Salmagundi Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 140,
        "rank": 140,
        "name": "The Royal Automobile Club of Australia",
        "city": "Sydney, UK",
        "establishedYear": 1903,
        "membershipFees": {
            "annual": 1900.0,
            "joiningFee": 3800.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Automotive enthusiasts"
            ]
        },
        "clubType": [
            "Social",
            "Automotive"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, meeting rooms",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Motoring events, social gatherings",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "raca.com.au",
        "description": "An elegant Sydney club for car enthusiasts, offering a range of events and services related to automotive culture.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Royal Automobile Club of Australia photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 141,
        "rank": 141,
        "name": "The Manitoba Club",
        "city": "Winnipeg, UK",
        "establishedYear": 1874,
        "membershipFees": {
            "annual": 1800.0,
            "joiningFee": 3600.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business and social leaders"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, fitness center",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking events, gala dinners",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "manitobaclub.mb.ca",
        "description": "Winnipeg's oldest private club, known for its prestigious membership and commitment to business and social excellence.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Manitoba Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 142,
        "rank": 142,
        "name": "The Queensland Club",
        "city": "Brisbane, UK",
        "establishedYear": 1859,
        "membershipFees": {
            "annual": 2000.0,
            "joiningFee": 4000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, library",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Business meetings, social events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "queenslandclub.com.au",
        "description": "A heritage club offering a traditional atmosphere for Queensland's social and business networking.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Queensland Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 143,
        "rank": 143,
        "name": "The Tower Club Singapore",
        "city": "Singapore, UK",
        "establishedYear": 1997,
        "membershipFees": {
            "annual": 2400.0,
            "joiningFee": 4800.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business professionals"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, fitness center, meeting rooms",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking, fine dining",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "tower-club.com.sg",
        "description": "Located at the pinnacle of Singapore's tallest building, it offers breathtaking views and premium business facilities.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Tower Club Singapore photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 144,
        "rank": 144,
        "name": "The Genesee Valley Club",
        "city": "Rochester, UK",
        "establishedYear": 1885,
        "membershipFees": {
            "annual": 1700.0,
            "joiningFee": 3400.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Social",
            "Sports"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, sports facilities, pool",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Social events, athletic activities",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "geneseevalleyclub.org",
        "description": "A private club in Rochester providing a range of sporting and social activities in a family-friendly environment.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Genesee Valley Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 145,
        "rank": 145,
        "name": "The Cercle Munster",
        "city": "Luxembourg, UK",
        "establishedYear": 1986,
        "membershipFees": {
            "annual": 2200.0,
            "joiningFee": 4400.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business and cultural leaders"
            ]
        },
        "clubType": [
            "Business",
            "Cultural"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, library",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking events, cultural presentations",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "munster.lu",
        "description": "An exclusive club in Luxembourg known for its blend of business networking and cultural enrichment.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Cercle Munster photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 146,
        "rank": 146,
        "name": "The Canterbury Club",
        "city": "Christchurch, UK",
        "establishedYear": 1872,
        "membershipFees": {
            "annual": 1600.0,
            "joiningFee": 3200.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business and professional leaders"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, meeting rooms",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking, private events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "canterburyclub.co.nz",
        "description": "A distinguished club in New Zealand, offering a sophisticated setting for business and leisure with a rich history.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Canterbury Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 147,
        "rank": 147,
        "name": "The Rideau Club",
        "city": "Ottawa, UK",
        "establishedYear": 1865,
        "membershipFees": {
            "annual": 2300.0,
            "joiningFee": 4600.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business leaders"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, accommodations, fitness center",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking events, cultural activities",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "rideauclub.ca",
        "description": "Ottawa's oldest private club, fostering leadership and camaraderie among Canada's political and business elites.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Rideau Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 148,
        "rank": 148,
        "name": "The Royal Over-Seas League",
        "city": "London, UK",
        "establishedYear": 1910,
        "membershipFees": {
            "annual": 1500.0,
            "joiningFee": 3000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Commonwealth citizens"
            ]
        },
        "clubType": [
            "Cultural",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, accommodations, art gallery",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Cultural exchanges, art exhibitions",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "rosl.org.uk",
        "description": "Promoting international friendship and understanding among Commonwealth citizens through cultural events.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Royal Over-Seas League photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 149,
        "rank": 149,
        "name": "The American Club Taipei",
        "city": "Taipei, UK",
        "establishedYear": 1968,
        "membershipFees": {
            "annual": 2100.0,
            "joiningFee": 4200.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Expatriates and local business leaders"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, sports facilities, spa",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Family activities, business networking",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "americanclub.org.tw",
        "description": "A home away from home for the international community in Taipei, offering a blend of Eastern and Western culture.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The American Club Taipei photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 150,
        "rank": 150,
        "name": "The Saint James Paris",
        "city": "Paris, UK",
        "establishedYear": 1892,
        "membershipFees": {
            "annual": 3000.0,
            "joiningFee": 6000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Luxury",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Library, dining, garden",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Private events, luxury experiences",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "saint-james-paris.com",
        "description": "An exquisite club set in a Parisian chateau, providing members with an opulent setting for relaxation and social events.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Saint James Paris photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 151,
        "rank": 151,
        "name": "The Rand Club",
        "city": "Johannesburg, UK",
        "establishedYear": 1887,
        "membershipFees": {
            "annual": 1400.0,
            "joiningFee": 2800.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business and social leaders"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, accommodations",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking events, cultural gatherings",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "randclub.co.za",
        "description": "A symbol of Johannesburg's historical and social development, offering an elegant setting for business and socializing.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Rand Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 152,
        "rank": 152,
        "name": "The Club at the Ivy",
        "city": "London, UK",
        "establishedYear": 2008,
        "membershipFees": {
            "annual": 2500.0,
            "joiningFee": 5000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Arts and media professionals"
            ]
        },
        "clubType": [
            "Arts",
            "Dining"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Exclusive dining events, performances",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "the-club-at-the-ivy.com",
        "description": "An exclusive extension of The Ivy restaurant, known for its artistic clientele and high-profile dining experiences.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Club at the Ivy photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 153,
        "rank": 153,
        "name": "The Capital Club East Africa",
        "city": "Nairobi, UK",
        "establishedYear": 2006,
        "membershipFees": {
            "annual": 1900.0,
            "joiningFee": 3800.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business professionals"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, meeting rooms",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking, conferences",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "capitalclubeastafrica.com",
        "description": "East Africa's premier private business club, offering a luxury environment for networking and corporate events.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Capital Club East Africa photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 154,
        "rank": 154,
        "name": "The Kelvin Club",
        "city": "Melbourne, UK",
        "establishedYear": 1865,
        "membershipFees": {
            "annual": 1600.0,
            "joiningFee": 3200.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Local community leaders"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, library",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking, community events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "kelvinclub.com.au",
        "description": "A traditional Melbourne club with a contemporary twist, known for its vibrant community engagement and networking.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Kelvin Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 155,
        "rank": 155,
        "name": "The Saratoga Reading Rooms",
        "city": "Saratoga Springs, UK",
        "establishedYear": 1867,
        "membershipFees": {
            "annual": 1800.0,
            "joiningFee": 3600.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Local residents"
            ]
        },
        "clubType": [
            "Social",
            "Literary"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Library, dining",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Book clubs, literary talks",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "saratogareadingrooms.com",
        "description": "An historic institution in Saratoga Springs, focused on literary enrichment and social interaction among its members.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Saratoga Reading Rooms photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 156,
        "rank": 156,
        "name": "The Arts House at the Old Parliament",
        "city": "Singapore, UK",
        "establishedYear": 1827,
        "membershipFees": {
            "annual": 2400.0,
            "joiningFee": 4800.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Artists and cultural leaders"
            ]
        },
        "clubType": [
            "Cultural",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Art galleries, theater",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Art exhibitions, cultural performances",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "artshouse.sg",
        "description": "A cultural landmark in Singapore, offering a creative platform for artistic expression and cultural dialogues.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Arts House at the Old Parliament photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 157,
        "rank": 157,
        "name": "The Pacific-Union Club",
        "city": "San Francisco, UK",
        "establishedYear": 1852,
        "membershipFees": {
            "annual": 3100.0,
            "joiningFee": 6200.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business and social leaders"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, accommodations, library",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking, private events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "puclub.org",
        "description": "An exclusive club known for its historic building and status as a meeting place for San Francisco's social elite.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Pacific-Union Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 158,
        "rank": 158,
        "name": "The Yale Club of New York City",
        "city": "New York, UK",
        "establishedYear": 1897,
        "membershipFees": {
            "annual": 2000.0,
            "joiningFee": 4000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Yale University affiliates"
            ]
        },
        "clubType": [
            "Academic",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, accommodations, fitness center",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Lectures, reunions",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "yaleclubnyc.org",
        "description": "An exclusive enclave for Yale alumni, offering a home in NYC with extensive facilities and a strong community spirit.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Yale Club of New York City photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 159,
        "rank": 159,
        "name": "The Bengal Club",
        "city": "Kolkata, UK",
        "establishedYear": 1827,
        "membershipFees": {
            "annual": 1500.0,
            "joiningFee": 3000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Social",
            "Cultural"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, accommodations",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Cultural events, private dinners",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "thebengalclub.com",
        "description": "One of India's oldest clubs, known for its rich history and tradition in fostering cultural and social ties.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Bengal Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 160,
        "rank": 160,
        "name": "The Royal Automobile Club of Queensland",
        "city": "Brisbane, UK",
        "establishedYear": 1905,
        "membershipFees": {
            "annual": 1700.0,
            "joiningFee": 3400.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Vehicle owners"
            ]
        },
        "clubType": [
            "Automotive",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, accommodations",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Motoring events, social gatherings",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "racq.com.au",
        "description": "Dedicated to automobile enthusiasts in Queensland, providing services and events related to motoring and travel.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 5,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Royal Automobile Club of Queensland photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 161,
        "rank": 161,
        "name": "The Chelsea Arts Club",
        "city": "London, UK",
        "establishedYear": 1891,
        "membershipFees": {
            "annual": 2000.0,
            "joiningFee": 4000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Artists and art patrons"
            ]
        },
        "clubType": [
            "Arts",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Studios, dining, garden",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Art exhibitions, performances",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "chelseaartsclub.com",
        "description": "A vibrant hub for artists, offering a creative environment with studios and a dynamic calendar of artistic and social activities.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Chelsea Arts Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 162,
        "rank": 162,
        "name": "The Union Club of Boston",
        "city": "Boston, UK",
        "establishedYear": 1863,
        "membershipFees": {
            "annual": 2500.0,
            "joiningFee": 5000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business professionals"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, library, fitness center",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking, cultural events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "unionclub.org",
        "description": "One of America's oldest private clubs, known for its rich history and exclusive membership of Boston's elite.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Union Club of Boston photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 163,
        "rank": 163,
        "name": "The University Club of Chicago",
        "city": "Chicago, UK",
        "establishedYear": 1887,
        "membershipFees": {
            "annual": 3000.0,
            "joiningFee": 6000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "University affiliation"
            ]
        },
        "clubType": [
            "Academic",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, accommodations, sports facilities",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Lectures, social gatherings",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "ucco.com",
        "description": "A prestigious club fostering academic, cultural, and social pursuits among its members with university ties.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The University Club of Chicago photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 164,
        "rank": 164,
        "name": "The Automobile Club of Egypt",
        "city": "Cairo, UK",
        "establishedYear": 1924,
        "membershipFees": {
            "annual": 1800.0,
            "joiningFee": 3600.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Automobile enthusiasts"
            ]
        },
        "clubType": [
            "Automotive",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, library, car services",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Car shows, driving tours",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "ace.org.eg",
        "description": "The premier club for car lovers in Egypt, offering a range of services and events related to automotive culture and history.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Automobile Club of Egypt photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 165,
        "rank": 165,
        "name": "The Denver Athletic Club",
        "city": "Denver, UK",
        "establishedYear": 1884,
        "membershipFees": {
            "annual": 2400.0,
            "joiningFee": 4800.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Sports enthusiasts"
            ]
        },
        "clubType": [
            "Sports",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Gym, pool, dining, sports courts",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Athletic competitions, social events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "denverathleticclub.cc",
        "description": "A center for fitness and socialization, providing members with extensive sports facilities and a vibrant social calendar.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Denver Athletic Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 166,
        "rank": 166,
        "name": "The Lahore Gymkhana",
        "city": "Lahore, UK",
        "establishedYear": 1878,
        "membershipFees": {
            "annual": 1600.0,
            "joiningFee": 3200.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Application and referral"
            ]
        },
        "clubType": [
            "Sports",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Golf course, dining, pool",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Sports tournaments, social gatherings",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "lahoregymkhana.com.pk",
        "description": "An elite club with a storied past, offering premier sports facilities and social events in a historical setting.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Lahore Gymkhana photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 167,
        "rank": 167,
        "name": "The Royal Hong Kong Yacht Club",
        "city": "Hong Kong, UK",
        "establishedYear": 1849,
        "membershipFees": {
            "annual": 2500.0,
            "joiningFee": 5000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Sailing enthusiasts"
            ]
        },
        "clubType": [
            "Yachting",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Marina, dining, bar",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Sailing regattas, social events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "rhkyc.org.hk",
        "description": "A prestigious yachting club known for its active sailing community and waterfront facilities.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Royal Hong Kong Yacht Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 168,
        "rank": 168,
        "name": "The Metropolitan Club",
        "city": "Washington, D.C., UK",
        "establishedYear": 1863,
        "membershipFees": {
            "annual": 3000.0,
            "joiningFee": 6000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business and civic leaders"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, accommodations, fitness center",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Civic engagements, networking events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "metropolitanclub.org",
        "description": "An exclusive gathering place for Washington's political and business leaders, offering luxury and tradition.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Metropolitan Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 169,
        "rank": 169,
        "name": "The Royal St. George Yacht Club",
        "city": "Dublin, UK",
        "establishedYear": 1838,
        "membershipFees": {
            "annual": 1900.0,
            "joiningFee": 3800.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Yachting enthusiasts"
            ]
        },
        "clubType": [
            "Yachting",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, marina",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Sailing events, social gatherings",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "rsgyc.ie",
        "description": "A historic yacht club with a commitment to sailing excellence and a vibrant social scene.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Royal St. George Yacht Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 170,
        "rank": 170,
        "name": "The Club de l'Union",
        "city": "Paris, UK",
        "establishedYear": 1901,
        "membershipFees": {
            "annual": 2600.0,
            "joiningFee": 5200.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business and cultural leaders"
            ]
        },
        "clubType": [
            "Business",
            "Cultural"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, library, meeting rooms",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Cultural presentations, networking",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "clubdelunion.fr",
        "description": "A distinguished Parisian club fostering cultural discourse and business networking in an elegant setting.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Club de l'Union photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 171,
        "rank": 171,
        "name": "The Norwood Club",
        "city": "New York, UK",
        "establishedYear": 2007,
        "membershipFees": {
            "annual": 2000.0,
            "joiningFee": 4000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Creatives and artists"
            ]
        },
        "clubType": [
            "Arts",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Studios, theater, dining",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Art exhibitions, performances",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "norwoodclub.com",
        "description": "A private arts club providing a sanctuary and workspace for creatives in the heart of New York City.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Norwood Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 172,
        "rank": 172,
        "name": "The Auckland Club",
        "city": "Auckland, UK",
        "establishedYear": 1856,
        "membershipFees": {
            "annual": 1800.0,
            "joiningFee": 3600.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business and professional leaders"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, library",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Business meetings, social events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "aucklandclub.co.nz",
        "description": "An elite venue in Auckland's CBD, known for its conservative values and high-profile membership.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Auckland Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 173,
        "rank": 173,
        "name": "The New Club",
        "city": "Edinburgh, UK",
        "establishedYear": 1787,
        "membershipFees": {
            "annual": 2300.0,
            "joiningFee": 4600.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Social",
            "Cultural"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, accommodations, library",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Cultural events, private gatherings",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "newclub.co.uk",
        "description": "One of the oldest and most exclusive clubs in Scotland, offering luxury and privacy for its esteemed members.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The New Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 174,
        "rank": 174,
        "name": "The Tokyo American Club",
        "city": "Tokyo, UK",
        "establishedYear": 1928,
        "membershipFees": {
            "annual": 3500.0,
            "joiningFee": 7000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Expatriates and locals"
            ]
        },
        "clubType": [
            "Social",
            "Cultural"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, fitness center, spa",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Family activities, networking events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "tokyoamericanclub.org",
        "description": "An international community hub in Tokyo, providing a blend of American and Japanese cultural experiences.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Tokyo American Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 175,
        "rank": 175,
        "name": "The Oxford and Cambridge Club",
        "city": "London, UK",
        "establishedYear": 1830,
        "membershipFees": {
            "annual": 2300.0,
            "joiningFee": 4600.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Oxford or Cambridge affiliation"
            ]
        },
        "clubType": [
            "Academic",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, library, accommodation",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Academic discussions, social events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "oxfordandcambridgeclub.co.uk",
        "description": "A prestigious venue for alumni of Oxford and Cambridge, fostering a sense of tradition and intellectual engagement.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Oxford and Cambridge Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 176,
        "rank": 176,
        "name": "The Saint James Club",
        "city": "Paris, UK",
        "establishedYear": 1892,
        "membershipFees": {
            "annual": 3000.0,
            "joiningFee": 6000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business and cultural elites"
            ]
        },
        "clubType": [
            "Luxury",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, accommodations, library",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Private dinners, cultural events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "saint-james-paris.com",
        "description": "An exclusive club in a Parisian chateau, offering luxury accommodations and a setting for high society gatherings.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Saint James Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 177,
        "rank": 177,
        "name": "The Vancouver Club",
        "city": "Vancouver, UK",
        "establishedYear": 1889,
        "membershipFees": {
            "annual": 2500.0,
            "joiningFee": 5000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business and social leaders"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, fitness center, wine cellar",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking events, wine tastings",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "thevancouverclub.ca",
        "description": "A historic Canadian club, combining traditional elegance with modern amenities for a discerning membership.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Vancouver Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 178,
        "rank": 178,
        "name": "The Union Club of British Columbia",
        "city": "Victoria, UK",
        "establishedYear": 1879,
        "membershipFees": {
            "annual": 1700.0,
            "joiningFee": 3400.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Invitation only"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, accommodations",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Social gatherings, business events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "unionclub.com",
        "description": "A prestigious club with a rich heritage in British Columbia, known for its exclusivity and high standards.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Union Club of British Columbia photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 179,
        "rank": 179,
        "name": "The Royal Perth Yacht Club",
        "city": "Perth, UK",
        "establishedYear": 1865,
        "membershipFees": {
            "annual": 1900.0,
            "joiningFee": 3800.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Sailing enthusiasts"
            ]
        },
        "clubType": [
            "Yachting",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Marina, dining, bar",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Regattas, social events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "rpyc.com.au",
        "description": "A premier sailing club in Western Australia, known for its commitment to sailing excellence and vibrant social activities.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Royal Perth Yacht Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 180,
        "rank": 180,
        "name": "The Missouri Athletic Club",
        "city": "St. Louis, UK",
        "establishedYear": 1903,
        "membershipFees": {
            "annual": 2100.0,
            "joiningFee": 4200.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Sports and fitness enthusiasts"
            ]
        },
        "clubType": [
            "Sports",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, fitness center, accommodations",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Athletic competitions, networking events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "mac-stl.org",
        "description": "A historic club in St. Louis, providing comprehensive athletic facilities and fostering a strong community spirit.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Missouri Athletic Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 181,
        "rank": 181,
        "name": "The Karachi Club",
        "city": "Karachi, UK",
        "establishedYear": 1907,
        "membershipFees": {
            "annual": 1600.0,
            "joiningFee": 3200.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business and social leaders"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, sports facilities",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking events, cultural activities",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "karachiclub.org",
        "description": "An elite social club in Karachi, providing a luxurious setting for business networking and family activities.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Karachi Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 182,
        "rank": 182,
        "name": "The Royal Canadian Yacht Club",
        "city": "Toronto, UK",
        "establishedYear": 1852,
        "membershipFees": {
            "annual": 2400.0,
            "joiningFee": 4800.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Sailing enthusiasts"
            ]
        },
        "clubType": [
            "Yachting",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Marina, dining, accommodations",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Sailing events, social gatherings",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "rcyc.ca",
        "description": "A prestigious yacht club on Toronto's waterfront, offering top sailing facilities and a robust social calendar.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Royal Canadian Yacht Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 183,
        "rank": 183,
        "name": "The Tanglin Club",
        "city": "Singapore, UK",
        "establishedYear": 1865,
        "membershipFees": {
            "annual": 2500.0,
            "joiningFee": 5000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Expatriates and locals"
            ]
        },
        "clubType": [
            "Social",
            "Cultural"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, sports facilities, theater",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Cultural performances, networking events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "tanglinclub.org.sg",
        "description": "One of Singapore's oldest social clubs, providing a colonial-style retreat with a range of recreational and cultural activities.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Tanglin Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 184,
        "rank": 184,
        "name": "The Lotus Club",
        "city": "New York, UK",
        "establishedYear": 1870,
        "membershipFees": {
            "annual": 2100.0,
            "joiningFee": 4200.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Arts and literary professionals"
            ]
        },
        "clubType": [
            "Arts",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, library",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Literary discussions, art exhibitions",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "lotusclub.org",
        "description": "A sanctuary for the arts in the heart of Manhattan, fostering a vibrant community of creative and literary talents.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Lotus Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 185,
        "rank": 185,
        "name": "The Wellington Club",
        "city": "Wellington, UK",
        "establishedYear": 1841,
        "membershipFees": {
            "annual": 1800.0,
            "joiningFee": 3600.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business and community leaders"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, meeting rooms",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Networking events, social gatherings",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "wellingtonclub.co.nz",
        "description": "A central hub for business and social networking in New Zealand's capital, known for its prestigious membership.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Wellington Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 186,
        "rank": 186,
        "name": "The Yale Club of New York City",
        "city": "New York, UK",
        "establishedYear": 1897,
        "membershipFees": {
            "annual": 2000.0,
            "joiningFee": 4000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Yale University affiliates"
            ]
        },
        "clubType": [
            "Academic",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, accommodations, fitness center",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Lectures, reunions",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "yaleclubnyc.org",
        "description": "An exclusive enclave for Yale alumni, providing a prestigious gathering place with extensive facilities in NYC.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Yale Club of New York City photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 187,
        "rank": 187,
        "name": "The American Club",
        "city": "Hong Kong, UK",
        "establishedYear": 1925,
        "membershipFees": {
            "annual": 2600.0,
            "joiningFee": 5200.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Expatriates and business leaders"
            ]
        },
        "clubType": [
            "Social",
            "Business"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, sports facilities, spa",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Family activities, business networking",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "americanclubhk.com",
        "description": "A home away from home for the international community in Hong Kong, offering a blend of Eastern and Western culture.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The American Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 188,
        "rank": 188,
        "name": "The Turf Club",
        "city": "New Delhi, UK",
        "establishedYear": 1876,
        "membershipFees": {
            "annual": 1700.0,
            "joiningFee": 3400.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Horse racing enthusiasts"
            ]
        },
        "clubType": [
            "Sports",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, racecourse",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Horse racing, social events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "delhiturfclub.com",
        "description": "A premier venue for horse racing and high society gatherings in India, combining sport and social prestige.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Turf Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 189,
        "rank": 189,
        "name": "The Bengal Club",
        "city": "Kolkata, UK",
        "establishedYear": 1827,
        "membershipFees": {
            "annual": 1500.0,
            "joiningFee": 3000.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business and cultural leaders"
            ]
        },
        "clubType": [
            "Business",
            "Cultural"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, accommodations",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Cultural events, business meetings",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "thebengalclub.com",
        "description": "An institution of colonial heritage in Kolkata, offering a luxurious escape with a focus on cultural enrichment and networking.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Bengal Club photo",
                "category": "general"
            }
        ]
    },
    {
        "id": 190,
        "rank": 190,
        "name": "The Brisbane Club",
        "city": "Brisbane, UK",
        "establishedYear": 1903,
        "membershipFees": {
            "annual": 2100.0,
            "joiningFee": 4200.0,
            "currency": "GBP"
        },
        "membershipRequirements": {
            "age": "21+",
            "referrals": 2,
            "otherCriteria": [
                "Business and professional leaders"
            ]
        },
        "clubType": [
            "Business",
            "Social"
        ],
        "facilities": [
            {
                "name": "General Facilities",
                "description": "Dining, bar, meeting rooms",
                "isAvailable": true
            }
        ],
        "eventsAndActivities": [
            {
                "name": "General Events",
                "description": "Business networking, private events",
                "frequency": "Varies",
                "category": "social/cultural"
            }
        ],
        "website": "brisbaneclub.com.au",
        "description": "A key business networking site in Brisbane, fostering professional development and social connections in a refined setting.",
        "reviews": [
            {
                "rating": 5,
                "comment": "General high satisfaction",
                "author": "Anonymous",
                "date": "2024-12-01"
            }
        ],
        "reciprocalClubs": 10,
        "pictures": [
            {
                "url": "https://example.com/photo.jpg",
                "alt": "The Brisbane Club photo",
                "category": "general"
            }
        ]
    }
]