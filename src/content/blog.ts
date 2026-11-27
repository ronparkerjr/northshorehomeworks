// Articles carried over from the old site's /news/ page (wording kept as published); photos are new.
import basement_remodel from "@/assets/blog/basement-remodel.jpg";
import bathroom_remodel from "@/assets/blog/bathroom-remodel.jpg";
import bedroom_remodel from "@/assets/blog/bedroom-remodel.jpg";
import deck_planning from "@/assets/blog/deck-planning.jpg";
import fence_types from "@/assets/blog/fence-types.jpg";
import gutter_installation from "@/assets/blog/gutter-installation.jpg";
import interior_painting from "@/assets/blog/interior-painting.jpg";
import kitchen_remodel_ideas from "@/assets/blog/kitchen-remodel-ideas.jpg";
import north_shore_home_1 from "@/assets/blog/north-shore-home-1.jpg";
import north_shore_home_2 from "@/assets/blog/north-shore-home-2.jpg";
import north_shore_home_3 from "@/assets/blog/north-shore-home-3.jpg";
import roof_repair_or_replace from "@/assets/blog/roof-repair-or-replace.jpg";

export type BlogBlock = { h: string } | { p: string };
export type BlogPost = { slug: string; title: string; date: string; town: boolean; image: string; imageAlt: string; blocks: BlogBlock[] };

const img = {"basement-remodel": basement_remodel, "bathroom-remodel": bathroom_remodel, "bedroom-remodel": bedroom_remodel, "deck-planning": deck_planning, "fence-types": fence_types, "gutter-installation": gutter_installation, "interior-painting": interior_painting, "kitchen-remodel-ideas": kitchen_remodel_ideas, "north-shore-home-1": north_shore_home_1, "north-shore-home-2": north_shore_home_2, "north-shore-home-3": north_shore_home_3, "roof-repair-or-replace": roof_repair_or_replace};

export const blogPosts: BlogPost[] = [
 {
  "slug": "what-you-need-to-know-before-you-build-a-deck-for-your-home",
  "title": "What You Need To Know Before You Build A Deck For Your Home",
  "date": "October 30, 2018",
  "town": false,
  "blocks": [
   {
    "p": "Are you planning to build a deck for you home and are in the process of figuring what to do first, costs, resources, layout, etc. If so, here’s what you need to know before you build a deck for your home. Building a deck for your home by yourself can be accompanied with several pitfalls. For instance, the final results of a do- it- yourself deck building procedure will miss the professional touch needed if you’re not experienced. Also, the entire DIY deck building process will certainly be time consuming because you will be the one searching for the different materials to use and researching for the processes to follow. This makes considering an expert to handle your deck building project necessary."
   },
   {
    "p": "Since not all companies that offer deck building solutions are genuine or will deliver appealing results, it is very important that you carefully do some thorough research before you choose any company specializing in these services. However, if you prefer building a deck for your home by yourself, here are some factors you require considering:"
   },
   {
    "p": "Factors you need to Know Before you Build a Deck for your Home"
   },
   {
    "h": "1. Purpose"
   },
   {
    "p": "It is important you put into consideration your different outdoor activities when dictating the shape, size and features of the deck you intend to build."
   },
   {
    "h": "2. Layout"
   },
   {
    "p": "Use strings and stakes to carefully outline the deck’s footprint so that you can be sure about the space that it will cover in your yard. It is essential you put furniture inside that outline in order to view if there is enough clearance. Also walk around your outline and see if you like the circulation, shape and views."
   },
   {
    "h": "3. Materials"
   },
   {
    "p": "There are different materials used to build decks which are meant to serve different functions. One of the materials you can consider using include manufactured boards. Manufactured boards are ideal choices when you wish to have an easy-care decking. Some of the pros associated with manufactured boards include having the capacity of taking stains as well as water proofing easily."
   },
   {
    "p": "Other alternative materials you can consider using are composite (available in a range of textures as well as colors and is durable if properly maintained) and PVC (this material is resistance to moisture and does not shrink or swell)."
   },
   {
    "h": "4. Choosing a Pattern"
   },
   {
    "p": "There are different patterns such as basket weave and accent boards you can utilize. It is important you choose a pattern that will better suit your needs and those of your family."
   },
   {
    "p": "However, if you intend to build a deck for your home and you find the building process involved complex to understand or follow, hire any reputable pro in your area to help you out. Here are some of the many reasons which make us the right choice for you in case you require the services of an expert when building a deck for your home."
   },
   {
    "h": "Why you Should Hire North Shore Home Works"
   },
   {
    "h": "*The Right Equipment and Materials will be used in your Project"
   },
   {
    "p": "Our company concentrates in investing in top- notch materials and facilities meant for building decks. Once our well- trained employees tackle your deck building project with our quality materials and tools, be sure you will attain durable and appealing results."
   },
   {
    "h": "*Our Deck Building Services are Affordable"
   },
   {
    "p": "Once you work with North Shore Home Works, we will not only provide you impeccable and very satisfying deck building solutions, but give you inexpensive charges so that you can afford us and reap the numerous benefits linked with our firm."
   },
   {
    "p": "For professional deck building services contact us today at (847) 409-5507"
   }
  ],
  "image": img["deck-planning"],
  "imageAlt": "Cedar deck with outdoor seating behind a suburban home"
 },
 {
  "slug": "ideas-for-remodeling-your-kitchen",
  "title": "Ideas for Remodeling Your Kitchen",
  "date": "October 30, 2018",
  "town": false,
  "blocks": [
   {
    "p": "If you want to add style and make your kitchen more functional then you can follow these ideas for remodeling your kitchen below."
   },
   {
    "h": "Paint old cabinets"
   },
   {
    "p": "You can brighten up your kitchen by using certain basic skills and little efforts by using new hardware and fresh paint on its existing cabinets. In order to get a sophisticated and cleaner look you can use paints with bright shades of white or neutral tones while painting your kitchen cabinets."
   },
   {
    "h": "Update backsplash"
   },
   {
    "p": "If you want to improve your food preparation and cooking area of the kitchen then you should update the backsplash by using tiles as per the décor of the kitchen. It will make your kitchen look more functional and beautiful."
   },
   {
    "h": "Update and open up"
   },
   {
    "p": "In order to make your kitchen look larger you can use open shelves to store the essentials, instead of upper cabinets. The lowest shelf should not be more than 18 inches from the worktop of your kitchen."
   },
   {
    "h": "Add an island"
   },
   {
    "p": "These days kitchen islands are used not only for preparing food but also for storing dishes as well as comfortable seating for dining. So you can add an island in your kitchen to upgrade it, regardless of the size of your kitchen and your requirements."
   },
   {
    "h": "Upgrade kitchen appliances"
   },
   {
    "p": "Installing energy efficient new appliances in your kitchen can be the best way to update your kitchen. You can add a new microwave, cooking range, dishwasher or refrigerator in your kitchen as per your requirement."
   },
   {
    "h": "Add stylish countertop"
   },
   {
    "p": "You can add a new countertop to make your kitchen look more stylish and different. You can make your countertop main attraction of your kitchen by choosing a granite countertop for it."
   },
   {
    "h": "Redo flooring"
   },
   {
    "p": "When you redo the flooring of your kitchen you can completely transform its looks. Though various types of flooring materials are available in the market these days but you should go for the options that are easy to clean and durable. Glazed tiles or vinyl tiles with wood-like design or traditional hardwood flooring can be the right choice for your kitchen."
   },
   {
    "h": "Make a nook more usable"
   },
   {
    "p": "If there is a corner that is used rarely then you can transform it into an additional space for storing the spares to make it more usable. You can store your coffee mugs and other dining accessories in this corner."
   },
   {
    "h": "Create a garage for appliances"
   },
   {
    "p": "You will have to keep your countertop clean and clear every time if you want to entertain your guests in your kitchen. So to accommodate your appliances you should create a garage for them. This garage can also serve you as a small work station for baking o making coffee etc."
   },
   {
    "h": "Create a workspace"
   },
   {
    "p": "If you are not planning to create a garage for appliances then you must create some space where you can do various works like kneading, mixing and chopping etc. You can create this additional workspace inside your kitchen island so that you can get additional workspace without consuming more kitchen area."
   },
   {
    "h": "For professional help contact us today at (847) 409-5507"
   }
  ],
  "image": img["kitchen-remodel-ideas"],
  "imageAlt": "Bright kitchen with white shaker cabinets and brass hardware"
 },
 {
  "slug": "home-improvement-in-des-plaines-illinois",
  "title": "Home Improvement in Des Plaines Illinois",
  "date": "October 19, 2018",
  "town": true,
  "blocks": [
   {
    "p": "North Shore Home Works offers a variety of home improvement services for our clients. Whether it’s a bathroom remodel, bedroom remodel, or kitchen remodel, we can help you find the design you’ve been looking for in the Des Plaines Illinois area. We can improve the look of any room in your house to your satisfaction. From minor repairs to a complete home remodeling, our team will take care of any job you need done."
   },
   {
    "h": "General Contractor In Des Plaines Illinois"
   },
   {
    "p": "No matter what you need constructed, North Shore’s general contractor team provides every service necessary for the completion of your project. If it’s residential construction you have in mind, we can build you the home you’ve always dreamed of owning. For the business owner looking to expand, we have over 25 years of experience in commercial construction, all at your disposal. So if you need a building made, just give us a call, and we’ll take care of the rest."
   },
   {
    "h": "Gutter Installation In Des Plaines Illinois"
   },
   {
    "p": "Gutter installation is crucial in preventing damage to the roof and foundation of any home or building. Whether it’s just a minor gutter repair or a complete gutter replacement, we make sure that this often-overlooked feature of your building or home stays in functional condition. Neglecting your gutter and downspout system can lead to huge costs down the road, as water damage often goes unnoticed until serious damage has already been done. So, if your home or building needs a gutter installed or repaired, give us a call now, and save yourself some costly repairs."
   },
   {
    "h": "Painting Contractors In Des Plaines Illinois"
   },
   {
    "p": "Painting a building yourself can be both time consuming and prohibitively expensive; North Shore’s painting contractors will save you the trouble. For a business, painting or repainting your building can cost you time and money that will be sorely missed. Our commercial painting team will get the job done quickly and at a reasonable cost, to help make sure you don’t lose business to your competitors because of this project. If you are a homeowner, our home painting team will take care of whatever you need done in your house. Whether it’s interior or exterior work, we can guarantee your satisfaction with our services."
   },
   {
    "h": "Deck Builder In Des Plaines Illinois"
   },
   {
    "p": "Building a deck is a project that most home or business owners are not prepared to undertake on their own. North Shore’s deck contractors are professionals, with years of experience in deck construction and repair at their disposal. We’ll take care of your project for you, making sure the deck builder you need gives you the service you want. We make sure our clients never leave unsatisfied with the quality of our work."
   },
   {
    "h": "Fencing Company In Des Plaines Illinois"
   },
   {
    "p": "North Shore’s fencing company offers services for both homeowners and commercial establishments that can satisfy all of your fence related needs. We offer year long fence installation and fence repair services, and our team of fencing contractors can take care of any project, no matter how big or small. You can choose from a wide variety of styles, sizes, and colors, tailored to your specifications. So give us a call, and we’ll offer our recommendations based on your individual needs and budget."
   },
   {
    "h": "Roofing Companies In Des Plaines Illinois"
   },
   {
    "p": "North Shore offers roofing services that can meet the needs of any customer. It doesn’t matter if you just need a small roof repair or a complete installation, our roofing contractors will get the job done. With quality materials and professional service, we take on projects for both commercial and residential clients."
   },
   {
    "h": "For a consultation and quote contact us today at (847) 409-5507"
   }
  ],
  "image": img["north-shore-home-1"],
  "imageAlt": "Brick colonial home on a tree-lined North Shore street"
 },
 {
  "slug": "home-improvement-in-arlington-heights-illinois",
  "title": "Home Improvement in Arlington Heights Illinois",
  "date": "October 19, 2018",
  "town": true,
  "blocks": [
   {
    "p": "North Shore Home Works offers a variety of home improvement services for our clients. Whether it’s a bathroom remodel, bedroom remodel, or kitchen remodel, we can help you find the design you’ve been looking for in the Arlington Heights Illinois area. We can improve the look of any room in your house to your satisfaction. From minor repairs to a complete home remodeling, our team will take care of any job you need done."
   },
   {
    "h": "General Contractor In Arlington Heights Illinois"
   },
   {
    "p": "No matter what you need constructed, North Shore’s general contractor team provides every service necessary for the completion of your project. If it’s residential construction you have in mind, we can build you the home you’ve always dreamed of owning. For the business owner looking to expand, we have over 25 years of experience in commercial construction, all at your disposal. So if you need a building made, just give us a call, and we’ll take care of the rest."
   },
   {
    "h": "Gutter Installation In Arlington Heights Illinois"
   },
   {
    "p": "Gutter installation is crucial in preventing damage to the roof and foundation of any home or building. Whether it’s just a minor gutter repair or a complete gutter replacement, we make sure that this often-overlooked feature of your building or home stays in functional condition. Neglecting your gutter and downspout system can lead to huge costs down the road, as water damage often goes unnoticed until serious damage has already been done. So, if your home or building needs a gutter installed or repaired, give us a call now, and save yourself some costly repairs."
   },
   {
    "h": "Painting Contractors In Arlington Heights Illinois"
   },
   {
    "p": "Painting a building yourself can be both time consuming and prohibitively expensive; North Shore’s painting contractors will save you the trouble. For a business, painting or repainting your building can cost you time and money that will be sorely missed. Our commercial painting team will get the job done quickly and at a reasonable cost, to help make sure you don’t lose business to your competitors because of this project. If you are a homeowner, our home painting team will take care of whatever you need done in your house. Whether it’s interior or exterior work, we can guarantee your satisfaction with our services."
   },
   {
    "h": "Deck Builder In Arlington Heights Illinois"
   },
   {
    "p": "Building a deck is a project that most home or business owners are not prepared to undertake on their own. North Shore’s deck contractors are professionals, with years of experience in deck construction and repair at their disposal. We’ll take care of your project for you, making sure the deck builder you need gives you the service you want. We make sure our clients never leave unsatisfied with the quality of our work."
   },
   {
    "h": "Fencing Company In Arlington Heights Illinois"
   },
   {
    "p": "North Shore’s fencing company offers services for both homeowners and commercial establishments that can satisfy all of your fence related needs. We offer year long fence installation and fence repair services, and our team of fencing contractors can take care of any project, no matter how big or small. You can choose from a wide variety of styles, sizes, and colors, tailored to your specifications. So give us a call, and we’ll offer our recommendations based on your individual needs and budget."
   },
   {
    "h": "Roofing Companies In Arlington Heights Illinois"
   },
   {
    "p": "North Shore offers roofing services that can meet the needs of any customer. It doesn’t matter if you just need a small roof repair or a complete installation, our roofing contractors will get the job done. With quality materials and professional service, we take on projects for both commercial and residential clients."
   },
   {
    "h": "For a consultation and quote contact us today at (847) 409-5507"
   }
  ],
  "image": img["north-shore-home-2"],
  "imageAlt": "Carpenter framing a home addition"
 },
 {
  "slug": "home-improvement-in-palatine-illinois",
  "title": "Home Improvement in Palatine Illinois",
  "date": "October 19, 2018",
  "town": true,
  "blocks": [
   {
    "p": "North Shore Home Works offers a variety of home improvement services for our clients. Whether it’s a bathroom remodel, bedroom remodel, or kitchen remodel, we can help you find the design you’ve been looking for in the Palatine Illinois area. We can improve the look of any room in your house to your satisfaction. From minor repairs to a complete home remodeling, our team will take care of any job you need done."
   },
   {
    "h": "General Contractor In Palatine Illinois"
   },
   {
    "p": "No matter what you need constructed, North Shore’s general contractor team provides every service necessary for the completion of your project. If it’s residential construction you have in mind, we can build you the home you’ve always dreamed of owning. For the business owner looking to expand, we have over 25 years of experience in commercial construction, all at your disposal. So if you need a building made, just give us a call, and we’ll take care of the rest."
   },
   {
    "h": "Gutter Installation In Palatine Illinois"
   },
   {
    "p": "Gutter installation is crucial in preventing damage to the roof and foundation of any home or building. Whether it’s just a minor gutter repair or a complete gutter replacement, we make sure that this often-overlooked feature of your building or home stays in functional condition. Neglecting your gutter and downspout system can lead to huge costs down the road, as water damage often goes unnoticed until serious damage has already been done. So, if your home or building needs a gutter installed or repaired, give us a call now, and save yourself some costly repairs."
   },
   {
    "h": "Painting Contractors In Palatine Illinois"
   },
   {
    "p": "Painting a building yourself can be both time consuming and prohibitively expensive; North Shore’s painting contractors will save you the trouble. For a business, painting or repainting your building can cost you time and money that will be sorely missed. Our commercial painting team will get the job done quickly and at a reasonable cost, to help make sure you don’t lose business to your competitors because of this project. If you are a homeowner, our home painting team will take care of whatever you need done in your house. Whether it’s interior or exterior work, we can guarantee your satisfaction with our services."
   },
   {
    "h": "Deck Builder In Palatine Illinois"
   },
   {
    "p": "Building a deck is a project that most home or business owners are not prepared to undertake on their own. North Shore’s deck contractors are professionals, with years of experience in deck construction and repair at their disposal. We’ll take care of your project for you, making sure the deck builder you need gives you the service you want. We make sure our clients never leave unsatisfied with the quality of our work."
   },
   {
    "h": "Fencing Company In Palatine Illinois"
   },
   {
    "p": "North Shore’s fencing company offers services for both homeowners and commercial establishments that can satisfy all of your fence related needs. We offer year long fence installation and fence repair services, and our team of fencing contractors can take care of any project, no matter how big or small. You can choose from a wide variety of styles, sizes, and colors, tailored to your specifications. So give us a call, and we’ll offer our recommendations based on your individual needs and budget."
   },
   {
    "h": "Roofing Companies In Palatine Illinois"
   },
   {
    "p": "North Shore offers roofing services that can meet the needs of any customer. It doesn’t matter if you just need a small roof repair or a complete installation, our roofing contractors will get the job done. With quality materials and professional service, we take on projects for both commercial and residential clients."
   },
   {
    "h": "For a consultation and quote contact us today at (847) 409-5507"
   }
  ],
  "image": img["north-shore-home-3"],
  "imageAlt": "Craftsman-style home with a new roof and porch"
 },
 {
  "slug": "home-improvement-in-vernon-hills-illinois",
  "title": "Home Improvement in Vernon Hills Illinois",
  "date": "October 19, 2018",
  "town": true,
  "blocks": [
   {
    "p": "North Shore Home Works offers a variety of home improvement services for our clients. Whether it’s a bathroom remodel, bedroom remodel, or kitchen remodel, we can help you find the design you’ve been looking for in the Vernon Hills Illinois area. We can improve the look of any room in your house to your satisfaction. From minor repairs to a complete home remodeling, our team will take care of any job you need done."
   },
   {
    "h": "General Contractor In Vernon Hills Illinois"
   },
   {
    "p": "No matter what you need constructed, North Shore’s general contractor team provides every service necessary for the completion of your project. If it’s residential construction you have in mind, we can build you the home you’ve always dreamed of owning. For the business owner looking to expand, we have over 25 years of experience in commercial construction, all at your disposal. So if you need a building made, just give us a call, and we’ll take care of the rest."
   },
   {
    "h": "Gutter Installation In Vernon Hills Illinois"
   },
   {
    "p": "Gutter installation is crucial in preventing damage to the roof and foundation of any home or building. Whether it’s just a minor gutter repair or a complete gutter replacement, we make sure that this often-overlooked feature of your building or home stays in functional condition. Neglecting your gutter and downspout system can lead to huge costs down the road, as water damage often goes unnoticed until serious damage has already been done. So, if your home or building needs a gutter installed or repaired, give us a call now, and save yourself some costly repairs."
   },
   {
    "h": "Painting Contractors In Vernon Hills Illinois"
   },
   {
    "p": "Painting a building yourself can be both time consuming and prohibitively expensive; North Shore’s painting contractors will save you the trouble. For a business, painting or repainting your building can cost you time and money that will be sorely missed. Our commercial painting team will get the job done quickly and at a reasonable cost, to help make sure you don’t lose business to your competitors because of this project. If you are a homeowner, our home painting team will take care of whatever you need done in your house. Whether it’s interior or exterior work, we can guarantee your satisfaction with our services."
   },
   {
    "h": "Deck Builder In Vernon Hills Illinois"
   },
   {
    "p": "Building a deck is a project that most home or business owners are not prepared to undertake on their own. North Shore’s deck contractors are professionals, with years of experience in deck construction and repair at their disposal. We’ll take care of your project for you, making sure the deck builder you need gives you the service you want. We make sure our clients never leave unsatisfied with the quality of our work."
   },
   {
    "h": "Fencing Company In Vernon Hills Illinois"
   },
   {
    "p": "North Shore’s fencing company offers services for both homeowners and commercial establishments that can satisfy all of your fence related needs. We offer year long fence installation and fence repair services, and our team of fencing contractors can take care of any project, no matter how big or small. You can choose from a wide variety of styles, sizes, and colors, tailored to your specifications. So give us a call, and we’ll offer our recommendations based on your individual needs and budget."
   },
   {
    "h": "Roofing Companies In Vernon Hills Illinois"
   },
   {
    "p": "North Shore offers roofing services that can meet the needs of any customer. It doesn’t matter if you just need a small roof repair or a complete installation, our roofing contractors will get the job done. With quality materials and professional service, we take on projects for both commercial and residential clients."
   },
   {
    "h": "For a consultation and quote contact us today at (847) 409-5507"
   }
  ],
  "image": img["north-shore-home-1"],
  "imageAlt": "Brick colonial home on a tree-lined North Shore street"
 },
 {
  "slug": "should-you-get-your-roof-replaced-or-repaired",
  "title": "Should You Get Your Roof Replaced or Repaired?",
  "date": "September 26, 2018",
  "town": false,
  "blocks": [
   {
    "p": "The last thing in your mind when you are considering to repair your house, to be honest, is your roof. Surprisingly, it should be the first instead. Asking why? Consider the downpour, the extreme temperature changes from heavy snow in winter to the high temperatures in summer, the avocados and other fruits that fall on it, blah blah blah. We don’t have to say anymore about the sorts of damages they can cause, you can figure them out. So? We should be agreeing that your roof is the most exposed part of your home to damage. Therefore? You either need to repair or replace it. But, the main question remains, Which Is Done When?"
   },
   {
    "h": "This Is When You Can Just Replace Shingles"
   },
   {
    "p": "Many a times, you just need to replace… not many shingles with new ones and your roof will just have a new look, despite extending its life span."
   },
   {
    "p": "First of all, you may certainly need a roof expert to examine your roof and determine what it needs before you head for the actual replacement. I don’t deny that some of us can simply do that. It’s true, a percentage of us actually can. But you know the value that comes along with consulting experts. Now, if some of your shingles are carried away by wind, putting new ones in their place can serve as a good measure for maintenance. However, it will depend on which part and what size of the roof affected. It can be a part and/or size that you can’t simply do the replacement yourself. You’ll consequently need an expert. Sometimes too, you may have noticed that despite the fact that some shingles may have been simply taken away, there might be a leak through your roof. In that case, the best course of action is finding an expert to fix it for you, most likely to replace the entire roof."
   },
   {
    "h": "There’s Time To Simply Patch The Damaged Areas."
   },
   {
    "p": "Patching some parts of your roof may come along with dangers. So making the decision to patch, and not to anything else to your roof should be done under advisement from a professional, just as with replacing shingles. He will inspect both the interior and exterior of your roof and come up with the apt solution."
   },
   {
    "p": "Just to go through a few, granules on the shingles may be a sign that it needs patching. Bent shingles, especially at their edges could also indicate that patching is needed. Some also patch “lost” shingles."
   },
   {
    "p": "Remember: Patching has costs that come along with it may lead to further damage. However, it all depends on the roofing Contractor working on it."
   },
   {
    "h": "You Can Cover It Up."
   },
   {
    "p": "You’re allowed to cover an existing roof with a layer of shingles, not two. Though it sounds like postponing the problem, it can aid in the short run. You should, however, take care not to put a load that your roof system cannot anchor. It may put you at risk. Please only do this in the presence of an expert."
   },
   {
    "h": "You May Need A Replacement."
   },
   {
    "p": "Sometimes, the damage may be so severe that the only thing left is replacing the roof. A leaky roof, a roof carried away by a tornado or any other disastrous happening, an old roof, a roof with worn out materials should be replaced. They can no longer provide you with shelter and the only solution here is replacement. Still, experts can do this best."
   },
   {
    "p": "North Shore Home Works are the most ideal roofing experts, with 25 years of experience and praise from all over Chicago’s North Shore! With an A+ rating from BBB, we assure you of clean and neat, reliable, in-time and, no doubt, quality services ahead of the rest. The fact that we are both a licensed and insured company communicates a lot about the amount of trust you can give us with any size of job you need to get done. You can also call us to seek consultation services. We are here to satisfy your needs."
   },
   {
    "h": "Call Us Today: 847-409-5507"
   }
  ],
  "image": img["roof-repair-or-replace"],
  "imageAlt": "Inspecting worn asphalt shingles on a roof"
 },
 {
  "slug": "interior-house-painting-tips",
  "title": "Interior House Painting Tips",
  "date": "September 26, 2018",
  "town": false,
  "blocks": [
   {
    "p": "A painting job could become a significant task which depends on the size and the area you want to cover. A small room may take you a couple of days, the interior painting might take a week, and the entire house might take you, let’s say again, it depends on the size."
   },
   {
    "p": "Interior painting involves a lot of time and money, and hence many want their walls to retain the paints for a longer time. The interior paints must be durable and long lasting, and hence it is essential that we choose the right paint for our home. Here are some Interior House Painting Tips that you should include in your checklist. These tips will make the entire job very easy for you."
   },
   {
    "h": "Know your interiors well"
   },
   {
    "p": "Before you set out to paint your wall, it is vital that you have a clear idea about your interiors, the furniture you already have, the draperies that you do not intend to change, the fireplace if any, cabinets and countertops, tile and many more similar types of items. This is very important because you have to choose a color scheme that matches with the existing setup of your home. It is not always possible to change the entire set of upholsteries, sofa, and table covers or furniture every time you color your interiors. So, you much choose a color that matches the pre-existing set up of your room."
   },
   {
    "h": "Choose the main wall"
   },
   {
    "p": "This is a pretty exciting concept, and you need to opt for the primary wall color that will compliment all the other wall colors of the entire room. This color will add a touch of warmth and inviting appeal to your interiors, if you want, you can make it even more dramatic as well. If you feel that it is a little bit confusing, then you can take the advice of your painting contractor as well. Many good contractors offer consultation services to their customers. Get it to touch with one of them, and they will offer you great and useful advice about painting your interiors. However, you need to do your piece of homework as well, after all, it is your home, and you are the only decision maker here."
   },
   {
    "h": "Apply a sample"
   },
   {
    "p": "Looking on to the catalog alone is not enough. It often happens that you choose a color, but when it is applied onto your walls, the effect is not all that desirable. To avoid these, ask your contractor to try out a sample of the paint that you intend to your for the entire wall. This will help you to have an idea about the after effects. If you think that it is not up to the mark, you can always think otherwise."
   },
   {
    "h": "Think of separate themes"
   },
   {
    "p": "If you apply the same color combinations for all your rooms, then there is every chance that your home will look a little annoying. Opt for different themes for different rooms, for example, choose something exciting and comical for your children’s room. For your bedroom, opt for something soft and romantic, the living room must be vibrant and appealing, and the guest room must have shades of warmth. You can always search online for good and useful interior painting advice."
   },
   {
    "p": "However, most people are super busy these days between work and family. Leave the heavy lifting to us at North Shore Home Works and contact us today for a consultation and quote at (847) 409-5507"
   }
  ],
  "image": img["interior-painting"],
  "imageAlt": "Painting a living room wall with a roller"
 },
 {
  "slug": "home-improvement-in-glenview-illinois",
  "title": "Home Improvement in Glenview Illinois",
  "date": "September 21, 2018",
  "town": true,
  "blocks": [
   {
    "p": "North Shore Home Works offers a variety of home improvement services for our clients. Whether it’s a bathroom remodel, bedroom remodel, or kitchen remodel, we can help you find the design you’ve been looking for in the Glenview Illinois area. We can improve the look of any room in your house to your satisfaction. From minor repairs to a complete home remodeling, our team will take care of any job you need done."
   },
   {
    "h": "General Contractor In Glenview Illinois"
   },
   {
    "p": "No matter what you need constructed, North Shore’s general contractor team provides every service necessary for the completion of your project. If it’s residential construction you have in mind, we can build you the home you’ve always dreamed of owning. For the business owner looking to expand, we have over 25 years of experience in commercial construction, all at your disposal. So if you need a building made, just give us a call, and we’ll take care of the rest."
   },
   {
    "h": "Gutter Installation In Glenview Illinois"
   },
   {
    "p": "Gutter installation is crucial in preventing damage to the roof and foundation of any home or building. Whether it’s just a minor gutter repair or a complete gutter replacement, we make sure that this often-overlooked feature of your building or home stays in functional condition. Neglecting your gutter and downspout system can lead to huge costs down the road, as water damage often goes unnoticed until serious damage has already been done. So, if your home or building needs a gutter installed or repaired, give us a call now, and save yourself some costly repairs."
   },
   {
    "h": "Painting Contractors In Glenview Illinois"
   },
   {
    "p": "Painting a building yourself can be both time consuming and prohibitively expensive; North Shore’s painting contractors will save you the trouble. For a business, painting or repainting your building can cost you time and money that will be sorely missed. Our commercial painting team will get the job done quickly and at a reasonable cost, to help make sure you don’t lose business to your competitors because of this project. If you are a homeowner, our home painting team will take care of whatever you need done in your house. Whether it’s interior or exterior work, we can guarantee your satisfaction with our services."
   },
   {
    "h": "Deck Builder In Glenview Illinois"
   },
   {
    "p": "Building a deck is a project that most home or business owners are not prepared to undertake on their own. North Shore’s deck contractors are professionals, with years of experience in deck construction and repair at their disposal. We’ll take care of your project for you, making sure the deck builder you need gives you the service you want. We make sure our clients never leave unsatisfied with the quality of our work."
   },
   {
    "h": "Fencing Company In Glenview Illinois"
   },
   {
    "p": "North Shore’s fencing company offers services for both homeowners and commercial establishments that can satisfy all of your fence related needs. We offer year long fence installation and fence repair services, and our team of fencing contractors can take care of any project, no matter how big or small. You can choose from a wide variety of styles, sizes, and colors, tailored to your specifications. So give us a call, and we’ll offer our recommendations based on your individual needs and budget."
   },
   {
    "h": "Roofing Companies In Glenview Illinois"
   },
   {
    "p": "North Shore offers roofing services that can meet the needs of any customer. It doesn’t matter if you just need a small roof repair or a complete installation, our roofing contractors will get the job done. With quality materials and professional service, we take on projects for both commercial and residential clients."
   },
   {
    "h": "For a consultation and quote contact us today at (847) 409-5507"
   }
  ],
  "image": img["north-shore-home-2"],
  "imageAlt": "Carpenter framing a home addition"
 },
 {
  "slug": "home-improvement-in-kildeer-illinois",
  "title": "Home Improvement in Kildeer Illinois",
  "date": "September 21, 2018",
  "town": true,
  "blocks": [
   {
    "p": "North Shore Home Works offers a variety of home improvement services for our clients. Whether it’s a bathroom remodel, bedroom remodel, or kitchen remodel, we can help you find the design you’ve been looking for in the Kildeer Illinois area. We can improve the look of any room in your house to your satisfaction. From minor repairs to a complete home remodeling, our team will take care of any job you need done."
   },
   {
    "h": "General Contractor In Kildeer Illinois"
   },
   {
    "p": "No matter what you need constructed, North Shore’s general contractor team provides every service necessary for the completion of your project. If it’s residential construction you have in mind, we can build you the home you’ve always dreamed of owning. For the business owner looking to expand, we have over 25 years of experience in commercial construction, all at your disposal. So if you need a building made, just give us a call, and we’ll take care of the rest."
   },
   {
    "h": "Gutter Installation In Kildeer Illinois"
   },
   {
    "p": "Gutter installation is crucial in preventing damage to the roof and foundation of any home or building. Whether it’s just a minor gutter repair or a complete gutter replacement, we make sure that this often-overlooked feature of your building or home stays in functional condition. Neglecting your gutter and downspout system can lead to huge costs down the road, as water damage often goes unnoticed until serious damage has already been done. So, if your home or building needs a gutter installed or repaired, give us a call now, and save yourself some costly repairs."
   },
   {
    "h": "Painting Contractors In Kildeer Illinois"
   },
   {
    "p": "Painting a building yourself can be both time consuming and prohibitively expensive; North Shore’s painting contractors will save you the trouble. For a business, painting or repainting your building can cost you time and money that will be sorely missed. Our commercial painting team will get the job done quickly and at a reasonable cost, to help make sure you don’t lose business to your competitors because of this project. If you are a homeowner, our home painting team will take care of whatever you need done in your house. Whether it’s interior or exterior work, we can guarantee your satisfaction with our services."
   },
   {
    "h": "Deck Builder In Kildeer Illinois"
   },
   {
    "p": "Building a deck is a project that most home or business owners are not prepared to undertake on their own. North Shore’s deck contractors are professionals, with years of experience in deck construction and repair at their disposal. We’ll take care of your project for you, making sure the deck builder you need gives you the service you want. We make sure our clients never leave unsatisfied with the quality of our work."
   },
   {
    "h": "Fencing Company In Kildeer Illinois"
   },
   {
    "p": "North Shore’s fencing company offers services for both homeowners and commercial establishments that can satisfy all of your fence related needs. We offer year long fence installation and fence repair services, and our team of fencing contractors can take care of any project, no matter how big or small. You can choose from a wide variety of styles, sizes, and colors, tailored to your specifications. So give us a call, and we’ll offer our recommendations based on your individual needs and budget."
   },
   {
    "h": "Roofing Companies In Kildeer Illinois"
   },
   {
    "p": "North Shore offers roofing services that can meet the needs of any customer. It doesn’t matter if you just need a small roof repair or a complete installation, our roofing contractors will get the job done. With quality materials and professional service, we take on projects for both commercial and residential clients."
   },
   {
    "h": "For a consultation and quote contact us today at (847) 409-5507"
   }
  ],
  "image": img["north-shore-home-3"],
  "imageAlt": "Craftsman-style home with a new roof and porch"
 },
 {
  "slug": "home-improvement-in-north-chicago-illinois",
  "title": "Home Improvement in North Chicago Illinois",
  "date": "September 21, 2018",
  "town": true,
  "blocks": [
   {
    "p": "North Shore Home Works offers a variety of home improvement services for our clients. Whether it’s a bathroom remodel, bedroom remodel, or kitchen remodel, we can help you find the design you’ve been looking for in the North Chicago Illinois area. We can improve the look of any room in your house to your satisfaction. From minor repairs to a complete home remodeling, our team will take care of any job you need done."
   },
   {
    "h": "General Contractor In North Chicago Illinois"
   },
   {
    "p": "No matter what you need constructed, North Shore’s general contractor team provides every service necessary for the completion of your project. If it’s residential construction you have in mind, we can build you the home you’ve always dreamed of owning. For the business owner looking to expand, we have over 25 years of experience in commercial construction, all at your disposal. So if you need a building made, just give us a call, and we’ll take care of the rest."
   },
   {
    "h": "Gutter Installation In North Chicago Illinois"
   },
   {
    "p": "Gutter installation is crucial in preventing damage to the roof and foundation of any home or building. Whether it’s just a minor gutter repair or a complete gutter replacement, we make sure that this often-overlooked feature of your building or home stays in functional condition. Neglecting your gutter and downspout system can lead to huge costs down the road, as water damage often goes unnoticed until serious damage has already been done. So, if your home or building needs a gutter installed or repaired, give us a call now, and save yourself some costly repairs."
   },
   {
    "h": "Painting Contractors In North Chicago Illinois"
   },
   {
    "p": "Painting a building yourself can be both time consuming and prohibitively expensive; North Shore’s painting contractors will save you the trouble. For a business, painting or repainting your building can cost you time and money that will be sorely missed. Our commercial painting team will get the job done quickly and at a reasonable cost, to help make sure you don’t lose business to your competitors because of this project. If you are a homeowner, our home painting team will take care of whatever you need done in your house. Whether it’s interior or exterior work, we can guarantee your satisfaction with our services."
   },
   {
    "h": "Deck Builder In North Chicago Illinois"
   },
   {
    "p": "Building a deck is a project that most home or business owners are not prepared to undertake on their own. North Shore’s deck contractors are professionals, with years of experience in deck construction and repair at their disposal. We’ll take care of your project for you, making sure the deck builder you need gives you the service you want. We make sure our clients never leave unsatisfied with the quality of our work."
   },
   {
    "h": "Fencing Company In North Chicago Illinois"
   },
   {
    "p": "North Shore’s fencing company offers services for both homeowners and commercial establishments that can satisfy all of your fence related needs. We offer year long fence installation and fence repair services, and our team of fencing contractors can take care of any project, no matter how big or small. You can choose from a wide variety of styles, sizes, and colors, tailored to your specifications. So give us a call, and we’ll offer our recommendations based on your individual needs and budget."
   },
   {
    "h": "Roofing Companies In North Chicago Illinois"
   },
   {
    "p": "North Shore offers roofing services that can meet the needs of any customer. It doesn’t matter if you just need a small roof repair or a complete installation, our roofing contractors will get the job done. With quality materials and professional service, we take on projects for both commercial and residential clients."
   },
   {
    "h": "For a consultation and quote contact us today at (847) 409-5507"
   }
  ],
  "image": img["north-shore-home-1"],
  "imageAlt": "Brick colonial home on a tree-lined North Shore street"
 },
 {
  "slug": "home-improvement-in-green-oaks-illinois",
  "title": "Home Improvement in Green Oaks Illinois",
  "date": "September 21, 2018",
  "town": true,
  "blocks": [
   {
    "p": "North Shore Home Works offers a variety of home improvement services for our clients. Whether it’s a bathroom remodel, bedroom remodel, or kitchen remodel, we can help you find the design you’ve been looking for in the Green Oaks Illinois area. We can improve the look of any room in your house to your satisfaction. From minor repairs to a complete home remodeling, our team will take care of any job you need done."
   },
   {
    "h": "General Contractor In Green Oaks Illinois"
   },
   {
    "p": "No matter what you need constructed, North Shore’s general contractor team provides every service necessary for the completion of your project. If it’s residential construction you have in mind, we can build you the home you’ve always dreamed of owning. For the business owner looking to expand, we have over 25 years of experience in commercial construction, all at your disposal. So if you need a building made, just give us a call, and we’ll take care of the rest."
   },
   {
    "h": "Gutter Installation In Green Oaks Illinois"
   },
   {
    "p": "Gutter installation is crucial in preventing damage to the roof and foundation of any home or building. Whether it’s just a minor gutter repair or a complete gutter replacement, we make sure that this often-overlooked feature of your building or home stays in functional condition. Neglecting your gutter and downspout system can lead to huge costs down the road, as water damage often goes unnoticed until serious damage has already been done. So, if your home or building needs a gutter installed or repaired, give us a call now, and save yourself some costly repairs."
   },
   {
    "h": "Painting Contractors In Green Oaks Illinois"
   },
   {
    "p": "Painting a building yourself can be both time consuming and prohibitively expensive; North Shore’s painting contractors will save you the trouble. For a business, painting or repainting your building can cost you time and money that will be sorely missed. Our commercial painting team will get the job done quickly and at a reasonable cost, to help make sure you don’t lose business to your competitors because of this project. If you are a homeowner, our home painting team will take care of whatever you need done in your house. Whether it’s interior or exterior work, we can guarantee your satisfaction with our services."
   },
   {
    "h": "Deck Builder In Green Oaks Illinois"
   },
   {
    "p": "Building a deck is a project that most home or business owners are not prepared to undertake on their own. North Shore’s deck contractors are professionals, with years of experience in deck construction and repair at their disposal. We’ll take care of your project for you, making sure the deck builder you need gives you the service you want. We make sure our clients never leave unsatisfied with the quality of our work."
   },
   {
    "h": "Fencing Company In Green Oaks Illinois"
   },
   {
    "p": "North Shore’s fencing company offers services for both homeowners and commercial establishments that can satisfy all of your fence related needs. We offer year long fence installation and fence repair services, and our team of fencing contractors can take care of any project, no matter how big or small. You can choose from a wide variety of styles, sizes, and colors, tailored to your specifications. So give us a call, and we’ll offer our recommendations based on your individual needs and budget."
   },
   {
    "h": "Roofing Companies In Green Oaks Illinois"
   },
   {
    "p": "North Shore offers roofing services that can meet the needs of any customer. It doesn’t matter if you just need a small roof repair or a complete installation, our roofing contractors will get the job done. With quality materials and professional service, we take on projects for both commercial and residential clients."
   },
   {
    "h": "For a consultation and quote contact us today at (847) 409-5507"
   }
  ],
  "image": img["north-shore-home-2"],
  "imageAlt": "Carpenter framing a home addition"
 },
 {
  "slug": "tips-for-remodeling-your-bedroom",
  "title": "Tips for Remodeling Your Bedroom",
  "date": "August 29, 2018",
  "town": false,
  "blocks": [
   {
    "p": "Your bedroom should be an area where family members could rest, relax and forget all uncertainties that are brought by a hard long day. Therefore, you must give extra effort in maintaining and keeping it as a pleasant and peaceful area for your exhausted worn out mind and body. If you would like to emphasize and accentuate your bedroom area and to help it more presentable and respectable than before, you must think about some home development and improvement tips. These guides would give techniques or practices that are within your means for bringing up to date your monotonous bedroom."
   },
   {
    "h": "Reorganize your furnishings"
   },
   {
    "p": "The secret to bring up to date your bedroom furnishing without spending a lot of money is the practice of rearranging home furniture especially if these are contemporary metal beds or contemporary bedroom sets. Inspecting or looking around your house and listing down things that you can bring inside your room are helpful. Just like for example, the table in the living room can be used as an alternative stand for night lamps. You can put some additional sequins, beads or any artistic supplies making it more personalized."
   },
   {
    "h": "Categorize your cabinets"
   },
   {
    "p": "A clean, unsoiled and orderly cabinet adds to the total visual art of your bedroom. Organize and classify your closet by categorizing all the things inside them. Utilize little boxes for keeping all personal and individual accessories and jewelries all together. Fold the shirts and pants neatly. Search for shoe racks which may be placed within the closets. Once you organize your closets, you would feel great and satisfied every time you get inside your room seeing it clean."
   },
   {
    "h": "Select the appropriate color of paint"
   },
   {
    "p": "There is no fixed regulation for selecting the right and appropriate colors for your bedrooms. Nevertheless, it will be advisable to paint your bedroom with color white. It will help you in addition to save money on the bills of your electricity because of its capability to reflect additional sunlight inside the room. Additionally, it will also smoothly and efficiently make your bedroom area appear elegant and stylish."
   },
   {
    "p": "If you are not into pure colors, you can still select any extra color of your preference. You can still utilize strong colors or any color that will give you the feeling of satisfaction and contentment with the interior of your room."
   },
   {
    "h": "Throw pillows and bed linens"
   },
   {
    "p": "You must also spend on several bed linens to give your bedroom an immediate new appearance. Take advantage of the big sales of the department stores for you to save extra money. For the duration of this occasion, you can get new bed linens at reasonable prices. Add soft, flexible and fashionable throw pillows on your bed making it more appealing and interesting to the eyes."
   },
   {
    "p": "If you follow these North Shore Home Works home enhancement tips, you will be successful in modernizing your bedroom regardless of your tight finances. Creating your home appear attractive need not to be too flamboyant or ostentatious."
   },
   {
    "p": "If you are interested in getting your bedroom remodeled then contact us today for a consultation and quote at (847) 409-5507."
   }
  ],
  "image": img["bedroom-remodel"],
  "imageAlt": "Calm remodeled bedroom in warm neutral tones"
 },
 {
  "slug": "tips-for-remodeling-your-basement",
  "title": "Tips for Remodeling Your Basement",
  "date": "August 29, 2018",
  "town": false,
  "blocks": [
   {
    "p": "If you are looking to remodel your basement soon, consider the tips which will be offered in this article so that you can make your project successful. Basically, before remodeling your basement, it is recommended you first decide what purpose that room will serve. Having a spacious basement is advantageous since you can turn it into anything you require it to be."
   },
   {
    "h": "Tip #1: Adding Built-Ins Shelving and Storage Places"
   },
   {
    "p": "It’s appropriate to maximize the space in your basement by adding built-ins shelving as well as storage areas. Try to figure out how you can steal space from adjacent rooms. However, avoid too much wood work or many built-ins since it can make the remodeling process turn out to be very costly. Simply keep your basement simple and affordable, yet attractive."
   },
   {
    "h": "Tip #2: Putting a Drop Ceiling"
   },
   {
    "p": "Putting a drop ceiling will be a cheaper process and will make your space appear like other rooms in your house. Be informed that a drop ceiling will take away a significant ceiling height thus ensuring your space appears much smaller."
   },
   {
    "h": "Tip #3: Creating an Open Stairwell"
   },
   {
    "p": "If necessary, make your basement turn out to be an attractive place by creating an open stairwell. A stairwell will visually connect the lower part of your house with the upper. This will allow natural light to easily penetrate into the basement."
   },
   {
    "h": "Tip #4: Install Carpet"
   },
   {
    "p": "If your space is cold and/ or uninviting, consider installing a carpet. It is essential you purchase a quality carpet which will contribute to making your basement comfortable and inviting."
   },
   {
    "p": "However, if you find these tricks difficult to follow when remodeling a basement, it is advisable you hire us at North Shore Home Works when remodeling your basement."
   },
   {
    "h": "Experience"
   },
   {
    "p": "We have employed very experienced people in our firm; a factor that assures you will be dealing with qualified and competent experts once you seek for our remodeling services."
   },
   {
    "h": "Our Services are Very Affordable"
   },
   {
    "p": "At the end of the day, we will ensure we offer you very satisfactory and inexpensive services. We often do this so as to enable our different clients afford us and seek for our services in the future again should its need arise."
   },
   {
    "p": "There are very many benefits you’ll reap if you will choose our basement remodeling and renovation services. Leave the heavy lifting to us."
   },
   {
    "h": "For a consultation and quote contact us today at (847) 409-5507"
   }
  ],
  "image": img["basement-remodel"],
  "imageAlt": "Finished basement with built-in shelving and carpet"
 },
 {
  "slug": "home-improvement-in-winnetka-illinois",
  "title": "Home Improvement in Winnetka Illinois",
  "date": "August 24, 2018",
  "town": true,
  "blocks": [
   {
    "p": "North Shore Home Works offers a variety of home improvement services for our clients. Whether it’s a bathroom remodel, bedroom remodel, or kitchen remodel, we can help you find the design you’ve been looking for in the Winnetka Illinois area. We can improve the look of any room in your house to your satisfaction. From minor repairs to a complete home remodeling, our team will take care of any job you need done."
   },
   {
    "h": "General Contractor In Winnetka Illinois"
   },
   {
    "p": "No matter what you need constructed, North Shore’s general contractor team provides every service necessary for the completion of your project. If it’s residential construction you have in mind, we can build you the home you’ve always dreamed of owning. For the business owner looking to expand, we have over 25 years of experience in commercial construction, all at your disposal. So if you need a building made, just give us a call, and we’ll take care of the rest."
   },
   {
    "h": "Gutter Installation In Winnetka Illinois"
   },
   {
    "p": "Gutter installation is crucial in preventing damage to the roof and foundation of any home or building. Whether it’s just a minor gutter repair or a complete gutter replacement, we make sure that this often-overlooked feature of your building or home stays in functional condition. Neglecting your gutter and downspout system can lead to huge costs down the road, as water damage often goes unnoticed until serious damage has already been done. So, if your home or building needs a gutter installed or repaired, give us a call now, and save yourself some costly repairs."
   },
   {
    "h": "Painting Contractors In Winnetka Illinois"
   },
   {
    "p": "Painting a building yourself can be both time consuming and prohibitively expensive; North Shore’s painting contractors will save you the trouble. For a business, painting or repainting your building can cost you time and money that will be sorely missed. Our commercial painting team will get the job done quickly and at a reasonable cost, to help make sure you don’t lose business to your competitors because of this project. If you are a homeowner, our home painting team will take care of whatever you need done in your house. Whether it’s interior or exterior work, we can guarantee your satisfaction with our services."
   },
   {
    "h": "Deck Builder In Winnetka Illinois"
   },
   {
    "p": "Building a deck is a project that most home or business owners are not prepared to undertake on their own. North Shore’s deck contractors are professionals, with years of experience in deck construction and repair at their disposal. We’ll take care of your project for you, making sure the deck builder you need gives you the service you want. We make sure our clients never leave unsatisfied with the quality of our work."
   },
   {
    "h": "Fencing Company In Winnetka Illinois"
   },
   {
    "p": "North Shore’s fencing company offers services for both homeowners and commercial establishments that can satisfy all of your fence related needs. We offer year long fence installation and fence repair services, and our team of fencing contractors can take care of any project, no matter how big or small. You can choose from a wide variety of styles, sizes, and colors, tailored to your specifications. So give us a call, and we’ll offer our recommendations based on your individual needs and budget."
   },
   {
    "h": "Roofing Companies In Winnetka Illinois"
   },
   {
    "p": "North Shore offers roofing services that can meet the needs of any customer. It doesn’t matter if you just need a small roof repair or a complete installation, our roofing contractors will get the job done. With quality materials and professional service, we take on projects for both commercial and residential clients."
   },
   {
    "h": "For a consultation and quote contact us today at (847) 409-5507"
   }
  ],
  "image": img["north-shore-home-3"],
  "imageAlt": "Craftsman-style home with a new roof and porch"
 },
 {
  "slug": "home-improvement-in-indian-creek-illinois",
  "title": "Home Improvement in Indian Creek Illinois",
  "date": "August 24, 2018",
  "town": true,
  "blocks": [
   {
    "p": "North Shore Home Works offers a variety of home improvement services for our clients. Whether it’s a bathroom remodel, bedroom remodel, or kitchen remodel, we can help you find the design you’ve been looking for in the Indian Creek Illinois area. We can improve the look of any room in your house to your satisfaction. From minor repairs to a complete home remodeling, our team will take care of any job you need done."
   },
   {
    "h": "General Contractor In Indian Creek Illinois"
   },
   {
    "p": "No matter what you need constructed, North Shore’s general contractor team provides every service necessary for the completion of your project. If it’s residential construction you have in mind, we can build you the home you’ve always dreamed of owning. For the business owner looking to expand, we have over 25 years of experience in commercial construction, all at your disposal. So if you need a building made, just give us a call, and we’ll take care of the rest."
   },
   {
    "h": "Gutter Installation In Indian Creek Illinois"
   },
   {
    "p": "Gutter installation is crucial in preventing damage to the roof and foundation of any home or building. Whether it’s just a minor gutter repair or a complete gutter replacement, we make sure that this often-overlooked feature of your building or home stays in functional condition. Neglecting your gutter and downspout system can lead to huge costs down the road, as water damage often goes unnoticed until serious damage has already been done. So, if your home or building needs a gutter installed or repaired, give us a call now, and save yourself some costly repairs."
   },
   {
    "h": "Painting Contractors In Indian Creek Illinois"
   },
   {
    "p": "Painting a building yourself can be both time consuming and prohibitively expensive; North Shore’s painting contractors will save you the trouble. For a business, painting or repainting your building can cost you time and money that will be sorely missed. Our commercial painting team will get the job done quickly and at a reasonable cost, to help make sure you don’t lose business to your competitors because of this project. If you are a homeowner, our home painting team will take care of whatever you need done in your house. Whether it’s interior or exterior work, we can guarantee your satisfaction with our services."
   },
   {
    "h": "Deck Builder In Indian Creek Illinois"
   },
   {
    "p": "Building a deck is a project that most home or business owners are not prepared to undertake on their own. North Shore’s deck contractors are professionals, with years of experience in deck construction and repair at their disposal. We’ll take care of your project for you, making sure the deck builder you need gives you the service you want. We make sure our clients never leave unsatisfied with the quality of our work."
   },
   {
    "h": "Fencing Company In Indian Creek Illinois"
   },
   {
    "p": "North Shore’s fencing company offers services for both homeowners and commercial establishments that can satisfy all of your fence related needs. We offer year long fence installation and fence repair services, and our team of fencing contractors can take care of any project, no matter how big or small. You can choose from a wide variety of styles, sizes, and colors, tailored to your specifications. So give us a call, and we’ll offer our recommendations based on your individual needs and budget."
   },
   {
    "h": "Roofing Companies In Indian Creek Illinois"
   },
   {
    "p": "North Shore offers roofing services that can meet the needs of any customer. It doesn’t matter if you just need a small roof repair or a complete installation, our roofing contractors will get the job done. With quality materials and professional service, we take on projects for both commercial and residential clients."
   },
   {
    "h": "For a consultation and quote contact us today at (847) 409-5507"
   }
  ],
  "image": img["north-shore-home-1"],
  "imageAlt": "Brick colonial home on a tree-lined North Shore street"
 },
 {
  "slug": "home-improvement-in-lake-bluff-illinois",
  "title": "Home Improvement in Lake Bluff Illinois",
  "date": "August 24, 2018",
  "town": true,
  "blocks": [
   {
    "p": "North Shore Home Works offers a variety of home improvement services for our clients. Whether it’s a bathroom remodel, bedroom remodel, or kitchen remodel, we can help you find the design you’ve been looking for in the Lake Bluff Illinois area. We can improve the look of any room in your house to your satisfaction. From minor repairs to a complete home remodeling, our team will take care of any job you need done."
   },
   {
    "h": "General Contractor In Lake Bluff Illinois"
   },
   {
    "p": "No matter what you need constructed, North Shore’s general contractor team provides every service necessary for the completion of your project. If it’s residential construction you have in mind, we can build you the home you’ve always dreamed of owning. For the business owner looking to expand, we have over 25 years of experience in commercial construction, all at your disposal. So if you need a building made, just give us a call, and we’ll take care of the rest."
   },
   {
    "h": "Gutter Installation In Lake Bluff Illinois"
   },
   {
    "p": "Gutter installation is crucial in preventing damage to the roof and foundation of any home or building. Whether it’s just a minor gutter repair or a complete gutter replacement, we make sure that this often-overlooked feature of your building or home stays in functional condition. Neglecting your gutter and downspout system can lead to huge costs down the road, as water damage often goes unnoticed until serious damage has already been done. So, if your home or building needs a gutter installed or repaired, give us a call now, and save yourself some costly repairs."
   },
   {
    "h": "Painting Contractors In Lake Bluff Illinois"
   },
   {
    "p": "Painting a building yourself can be both time consuming and prohibitively expensive; North Shore’s painting contractors will save you the trouble. For a business, painting or repainting your building can cost you time and money that will be sorely missed. Our commercial painting team will get the job done quickly and at a reasonable cost, to help make sure you don’t lose business to your competitors because of this project. If you are a homeowner, our home painting team will take care of whatever you need done in your house. Whether it’s interior or exterior work, we can guarantee your satisfaction with our services."
   },
   {
    "h": "Deck Builder In Lake Bluff Illinois"
   },
   {
    "p": "Building a deck is a project that most home or business owners are not prepared to undertake on their own. North Shore’s deck contractors are professionals, with years of experience in deck construction and repair at their disposal. We’ll take care of your project for you, making sure the deck builder you need gives you the service you want. We make sure our clients never leave unsatisfied with the quality of our work."
   },
   {
    "h": "Fencing Company In Lake Bluff Illinois"
   },
   {
    "p": "North Shore’s fencing company offers services for both homeowners and commercial establishments that can satisfy all of your fence related needs. We offer year long fence installation and fence repair services, and our team of fencing contractors can take care of any project, no matter how big or small. You can choose from a wide variety of styles, sizes, and colors, tailored to your specifications. So give us a call, and we’ll offer our recommendations based on your individual needs and budget."
   },
   {
    "h": "Roofing Companies In Lake Bluff Illinois"
   },
   {
    "p": "North Shore offers roofing services that can meet the needs of any customer. It doesn’t matter if you just need a small roof repair or a complete installation, our roofing contractors will get the job done. With quality materials and professional service, we take on projects for both commercial and residential clients."
   },
   {
    "h": "For a consultation and quote contact us today at (847) 409-5507"
   }
  ],
  "image": img["north-shore-home-2"],
  "imageAlt": "Carpenter framing a home addition"
 },
 {
  "slug": "home-improvement-in-lake-forest-illinois",
  "title": "Home Improvement in Lake Forest Illinois",
  "date": "August 24, 2018",
  "town": true,
  "blocks": [
   {
    "p": "North Shore Home Works offers a variety of home improvement services for our clients. Whether it’s a bathroom remodel, bedroom remodel, or kitchen remodel, we can help you find the design you’ve been looking for in the Lake Forest Illinois area. We can improve the look of any room in your house to your satisfaction. From minor repairs to a complete home remodeling, our team will take care of any job you need done."
   },
   {
    "h": "General Contractor In Lake Forest Illinois"
   },
   {
    "p": "No matter what you need constructed, North Shore’s general contractor team provides every service necessary for the completion of your project. If it’s residential construction you have in mind, we can build you the home you’ve always dreamed of owning. For the business owner looking to expand, we have over 25 years of experience in commercial construction, all at your disposal. So if you need a building made, just give us a call, and we’ll take care of the rest."
   },
   {
    "h": "Gutter Installation In Lake Forest Illinois"
   },
   {
    "p": "Gutter installation is crucial in preventing damage to the roof and foundation of any home or building. Whether it’s just a minor gutter repair or a complete gutter replacement, we make sure that this often-overlooked feature of your building or home stays in functional condition. Neglecting your gutter and downspout system can lead to huge costs down the road, as water damage often goes unnoticed until serious damage has already been done. So, if your home or building needs a gutter installed or repaired, give us a call now, and save yourself some costly repairs."
   },
   {
    "h": "Painting Contractors In Lake Forest Illinois"
   },
   {
    "p": "Painting a building yourself can be both time consuming and prohibitively expensive; North Shore’s painting contractors will save you the trouble. For a business, painting or repainting your building can cost you time and money that will be sorely missed. Our commercial painting team will get the job done quickly and at a reasonable cost, to help make sure you don’t lose business to your competitors because of this project. If you are a homeowner, our home painting team will take care of whatever you need done in your house. Whether it’s interior or exterior work, we can guarantee your satisfaction with our services."
   },
   {
    "h": "Deck Builder In Lake Forest Illinois"
   },
   {
    "p": "Building a deck is a project that most home or business owners are not prepared to undertake on their own. North Shore’s deck contractors are professionals, with years of experience in deck construction and repair at their disposal. We’ll take care of your project for you, making sure the deck builder you need gives you the service you want. We make sure our clients never leave unsatisfied with the quality of our work."
   },
   {
    "h": "Fencing Company In Lake Forest Illinois"
   },
   {
    "p": "North Shore’s fencing company offers services for both homeowners and commercial establishments that can satisfy all of your fence related needs. We offer year long fence installation and fence repair services, and our team of fencing contractors can take care of any project, no matter how big or small. You can choose from a wide variety of styles, sizes, and colors, tailored to your specifications. So give us a call, and we’ll offer our recommendations based on your individual needs and budget."
   },
   {
    "h": "Roofing Companies In Lake Forest Illinois"
   },
   {
    "p": "North Shore offers roofing services that can meet the needs of any customer. It doesn’t matter if you just need a small roof repair or a complete installation, our roofing contractors will get the job done. With quality materials and professional service, we take on projects for both commercial and residential clients."
   },
   {
    "h": "For a consultation and quote contact us today at (847) 409-5507"
   }
  ],
  "image": img["north-shore-home-3"],
  "imageAlt": "Craftsman-style home with a new roof and porch"
 },
 {
  "slug": "types-of-fences-for-your-home",
  "title": "Types Of Fences For Your Home",
  "date": "July 27, 2018",
  "town": false,
  "blocks": [
   {
    "p": "Fencing your home should give you a sense of security, safety, and privacy. The appearance of your fencing can also give your home a decorative and stylish look since it’s the first thing people see when they approach your home. As you make plans to decide on the type of fencing for your home, consider the reason you want to fence your home and decide from the listed types of fencing that will meet your requirement and budget."
   },
   {
    "h": "Wood"
   },
   {
    "p": "Typically, this type of fencing is found in most US homes. It is affordable, durable and can be used for years. Maintenance cost is relatively low and you can choose from a variety of wood such as oak, cedar, and treated pine."
   },
   {
    "h": "Aluminum"
   },
   {
    "p": "Aluminum fencing gives your home that attractive appearance; you know what they say about first impression. You can choose to paint and decorate it; apart from this, it has zero maintenance. It is important to point out that if one of the reasons for fencing is for security then you should consider other types of fencing for your home because aluminium fencing is not as strong as others."
   },
   {
    "h": "PVC"
   },
   {
    "p": "Durability is to PVC fencing as snow is to winter. They come in variety of colors and heights. Interestingly, it is the cheapest way to fence your home, yard or pool area. It is usually added to wooden frames to make the fence more stable."
   },
   {
    "h": "Wrought Iron"
   },
   {
    "p": "If you are looking for durability and probably hoping to heighten the beauty of your home, then wrought iron fencing is what you need if you can afford it. You will need to spend some cool change in maintaining it because they require sand papering and painting every other year."
   },
   {
    "h": "Vinyl"
   },
   {
    "p": "Hold up! Here comes the fencing for those who want to distinguish themselves. Vinyl fencing is very strong and flexible as compared to others. It requires zero maintenance cost other than the occasional cleaning with water and soap. Brace yourself for the initial installation cost that maybe quite high if you have a tight budget."
   },
   {
    "h": "Chain Link"
   },
   {
    "p": "A see through fencing that gives passerby a view of your home, so if your reason for fencing is privacy, you may need to reconsider using chain link. Otherwise, it is relatively cheap and durable, if you’re considering using chain link, you can invest a little in planting climbers like shrubs, vines, and even flowers to cut off prying eyes. You can start with Honey suckle and roses."
   },
   {
    "h": "Electric"
   },
   {
    "p": "Are you a pet lover? Do you own a dog? Well, you should consider using electric fencing to set a boundary round the parameter you do not want your buddy’ to wander off to, this is done by building a invisible field of electricity through wires that are placed in trenches dug along the boundaries."
   },
   {
    "h": "Conclusion"
   },
   {
    "p": "Most homeowners have security and privacy on their mind when choosing the type of fencing they want for their home, on the other hand who says you can’t have it all; safety, security, privacy and beauty."
   },
   {
    "p": "For a consultation and quote contact us today at (847) 409-5507"
   }
  ],
  "image": img["fence-types"],
  "imageAlt": "Cedar privacy fence beside a white picket fence"
 },
 {
  "slug": "how-to-install-gutters-on-your-home",
  "title": "How To Install Gutters On Your Home",
  "date": "July 27, 2018",
  "town": false,
  "blocks": [
   {
    "p": "Gutters are a vital part of your roof. Installing them correctly is important as to properly keep away water from the surrounding areas of your home. Appropriately mounted gutters will take out water coming from the roof and canal it away preventing damage and ensuring a safe house. When installing gutters, it is best to ask for guidance from a professional. With proper guidance, you can do it simply. You only need some assistance from a family member or a friend. Following are the main steps to follow when installing gutters."
   },
   {
    "h": "1. Prepare all the materials"
   },
   {
    "p": "First and foremost, prepare all the materials needed for installing gutters. Make sure you identify the exact area to channel the water away. Survey the exterior of your house and decide how supposedly the water goes away from the roof. The gutters must hold the water as it is being drained away. Assess the ends of the roof and count how many segments of gutter you will need. Add allowance to your measurement for adjustment reasons. In this manner, you are halfway ready to install the gutters. Installing gutters requires preparation of the plan. Like other home development jobs, you should list all the materials that you will need."
   },
   {
    "h": "2. Actual installation"
   },
   {
    "p": "Now, you can start the actual installation of gutters. Set the roof by making appropriate measurements. The location of the downspout and the roof of the edge must be measured accurately. Identify the exact locations and make some markings. As a part of fitting gutters, you should obtain a suitable slope so that water drains instantly through the downspout. Measure the length from the first part of the downspout ending. Put a location mark for fixing your gutters. Fix the components of the gutter components by following the guide. This should include the downspout and the brackets. Use your regular power drill to screw the brackets. Use the ladder to individually install the portions of the gutter into the brackets, mount it and connect the gutter sections."
   },
   {
    "p": "To continue installing gutters, cut the gutter parts using a hacksaw. Make the fitting as necessary as possible and put some anti-leaking sealants to the gutter sections, thus avoiding water leaks. Mount an elbow underneath the drop outlet, then quantify, hack and install the downspout to the support of the drop outlet. Make use of mounting brackets to tightly connect the downspout to the area of the house."
   },
   {
    "h": "Conclusion"
   },
   {
    "p": "Whether you are looking for a basic gutter system that will just simply keep the rain away from your home or if you are looking for a system that will keep out dust, debris, and leaves there are many choices available. The materials that are available are also numerous. Your budget will determine the level of protection you can get with your gutters."
   },
   {
    "p": "Installing rain gutters is not too hard if you know what you are doing or if you have clear instructions."
   },
   {
    "p": "However, if you want to leave the heaving lifting to us at North Shore Home Works contact us today for a consultation and quote at (847) 409-5507."
   }
  ],
  "image": img["gutter-installation"],
  "imageAlt": "New seamless gutter and downspout on a house"
 },
 {
  "slug": "home-improvement-in-northfield-illinois",
  "title": "Home Improvement in Northfield Illinois",
  "date": "July 25, 2018",
  "town": true,
  "blocks": [
   {
    "p": "North Shore Home Works offers a variety of home improvement services for our clients. Whether it’s a bathroom remodel, bedroom remodel, or kitchen remodel, we can help you find the design you’ve been looking for in the Northfield Illinois area. We can improve the look of any room in your house to your satisfaction. From minor repairs to a complete home remodeling, our team will take care of any job you need done."
   },
   {
    "h": "General Contractor In Northfield Illinois"
   },
   {
    "p": "No matter what you need constructed, North Shore’s general contractor team provides every service necessary for the completion of your project. If it’s residential construction you have in mind, we can build you the home you’ve always dreamed of owning. For the business owner looking to expand, we have over 25 years of experience in commercial construction, all at your disposal. So if you need a building made, just give us a call, and we’ll take care of the rest."
   },
   {
    "h": "Gutter Installation In Northfield Illinois"
   },
   {
    "p": "Gutter installation is crucial in preventing damage to the roof and foundation of any home or building. Whether it’s just a minor gutter repair or a complete gutter replacement, we make sure that this often-overlooked feature of your building or home stays in functional condition. Neglecting your gutter and downspout system can lead to huge costs down the road, as water damage often goes unnoticed until serious damage has already been done. So, if your home or building needs a gutter installed or repaired, give us a call now, and save yourself some costly repairs."
   },
   {
    "h": "Painting Contractors In Northfield Illinois"
   },
   {
    "p": "Painting a building yourself can be both time consuming and prohibitively expensive; North Shore’s painting contractors will save you the trouble. For a business, painting or repainting your building can cost you time and money that will be sorely missed. Our commercial painting team will get the job done quickly and at a reasonable cost, to help make sure you don’t lose business to your competitors because of this project. If you are a homeowner, our home painting team will take care of whatever you need done in your house. Whether it’s interior or exterior work, we can guarantee your satisfaction with our services."
   },
   {
    "h": "Deck Builder In Northfield Illinois"
   },
   {
    "p": "Building a deck is a project that most home or business owners are not prepared to undertake on their own. North Shore’s deck contractors are professionals, with years of experience in deck construction and repair at their disposal. We’ll take care of your project for you, making sure the deck builder you need gives you the service you want. We make sure our clients never leave unsatisfied with the quality of our work."
   },
   {
    "h": "Fencing Company In Northfield Illinois"
   },
   {
    "p": "North Shore’s fencing company offers services for both homeowners and commercial establishments that can satisfy all of your fence related needs. We offer year long fence installation and fence repair services, and our team of fencing contractors can take care of any project, no matter how big or small. You can choose from a wide variety of styles, sizes, and colors, tailored to your specifications. So give us a call, and we’ll offer our recommendations based on your individual needs and budget."
   },
   {
    "h": "Roofing Companies In Northfield Illinois"
   },
   {
    "p": "North Shore offers roofing services that can meet the needs of any customer. It doesn’t matter if you just need a small roof repair or a complete installation, our roofing contractors will get the job done. With quality materials and professional service, we take on projects for both commercial and residential clients."
   },
   {
    "h": "For a consultation and quote contact us today at (847) 409-5507"
   }
  ],
  "image": img["north-shore-home-1"],
  "imageAlt": "Brick colonial home on a tree-lined North Shore street"
 },
 {
  "slug": "home-improvement-in-glencoe-illinois",
  "title": "Home Improvement in Glencoe Illinois",
  "date": "July 25, 2018",
  "town": true,
  "blocks": [
   {
    "p": "North Shore Home Works offers a variety of home improvement services for our clients. Whether it’s a bathroom remodel, bedroom remodel, or kitchen remodel, we can help you find the design you’ve been looking for in the Glencoe Illinois area. We can improve the look of any room in your house to your satisfaction. From minor repairs to a complete home remodeling, our team will take care of any job you need done."
   },
   {
    "h": "General Contractor In Glencoe Illinois"
   },
   {
    "p": "No matter what you need constructed, North Shore’s general contractor team provides every service necessary for the completion of your project. If it’s residential construction you have in mind, we can build you the home you’ve always dreamed of owning. For the business owner looking to expand, we have over 25 years of experience in commercial construction, all at your disposal. So if you need a building made, just give us a call, and we’ll take care of the rest."
   },
   {
    "h": "Gutter Installation In Glencoe Illinois"
   },
   {
    "p": "Gutter installation is crucial in preventing damage to the roof and foundation of any home or building. Whether it’s just a minor gutter repair or a complete gutter replacement, we make sure that this often-overlooked feature of your building or home stays in functional condition. Neglecting your gutter and downspout system can lead to huge costs down the road, as water damage often goes unnoticed until serious damage has already been done. So, if your home or building needs a gutter installed or repaired, give us a call now, and save yourself some costly repairs."
   },
   {
    "h": "Painting Contractors In Glencoe Illinois"
   },
   {
    "p": "Painting a building yourself can be both time consuming and prohibitively expensive; North Shore’s painting contractors will save you the trouble. For a business, painting or repainting your building can cost you time and money that will be sorely missed. Our commercial painting team will get the job done quickly and at a reasonable cost, to help make sure you don’t lose business to your competitors because of this project. If you are a homeowner, our home painting team will take care of whatever you need done in your house. Whether it’s interior or exterior work, we can guarantee your satisfaction with our services."
   },
   {
    "h": "Deck Builder In Glencoe Illinois"
   },
   {
    "p": "Building a deck is a project that most home or business owners are not prepared to undertake on their own. North Shore’s deck contractors are professionals, with years of experience in deck construction and repair at their disposal. We’ll take care of your project for you, making sure the deck builder you need gives you the service you want. We make sure our clients never leave unsatisfied with the quality of our work."
   },
   {
    "h": "Fencing Company In Glencoe Illinois"
   },
   {
    "p": "North Shore’s fencing company offers services for both homeowners and commercial establishments that can satisfy all of your fence related needs. We offer year long fence installation and fence repair services, and our team of fencing contractors can take care of any project, no matter how big or small. You can choose from a wide variety of styles, sizes, and colors, tailored to your specifications. So give us a call, and we’ll offer our recommendations based on your individual needs and budget."
   },
   {
    "h": "Roofing Companies In Glencoe Illinois"
   },
   {
    "p": "North Shore offers roofing services that can meet the needs of any customer. It doesn’t matter if you just need a small roof repair or a complete installation, our roofing contractors will get the job done. With quality materials and professional service, we take on projects for both commercial and residential clients."
   },
   {
    "h": "For a consultation and quote contact us today at (847) 409-5507"
   }
  ],
  "image": img["north-shore-home-2"],
  "imageAlt": "Carpenter framing a home addition"
 },
 {
  "slug": "home-improvement-in-lincolnshire-illinois",
  "title": "Home Improvement in Lincolnshire Illinois",
  "date": "July 25, 2018",
  "town": true,
  "blocks": [
   {
    "p": "North Shore Home Works offers a variety of home improvement services for our clients. Whether it’s a bathroom remodel, bedroom remodel, or kitchen remodel, we can help you find the design you’ve been looking for in the Lincolnshire Illinois area. We can improve the look of any room in your house to your satisfaction. From minor repairs to a complete home remodeling, our team will take care of any job you need done."
   },
   {
    "h": "General Contractor In Lincolnshire Illinois"
   },
   {
    "p": "No matter what you need constructed, North Shore’s general contractor team provides every service necessary for the completion of your project. If it’s residential construction you have in mind, we can build you the home you’ve always dreamed of owning. For the business owner looking to expand, we have over 25 years of experience in commercial construction, all at your disposal. So if you need a building made, just give us a call, and we’ll take care of the rest."
   },
   {
    "h": "Gutter Installation In Lincolnshire Illinois"
   },
   {
    "p": "Gutter installation is crucial in preventing damage to the roof and foundation of any home or building. Whether it’s just a minor gutter repair or a complete gutter replacement, we make sure that this often-overlooked feature of your building or home stays in functional condition. Neglecting your gutter and downspout system can lead to huge costs down the road, as water damage often goes unnoticed until serious damage has already been done. So, if your home or building needs a gutter installed or repaired, give us a call now, and save yourself some costly repairs."
   },
   {
    "h": "Painting Contractors In Lincolnshire Illinois"
   },
   {
    "p": "Painting a building yourself can be both time consuming and prohibitively expensive; North Shore’s painting contractors will save you the trouble. For a business, painting or repainting your building can cost you time and money that will be sorely missed. Our commercial painting team will get the job done quickly and at a reasonable cost, to help make sure you don’t lose business to your competitors because of this project. If you are a homeowner, our home painting team will take care of whatever you need done in your house. Whether it’s interior or exterior work, we can guarantee your satisfaction with our services."
   },
   {
    "h": "Deck Builder In Lincolnshire Illinois"
   },
   {
    "p": "Building a deck is a project that most home or business owners are not prepared to undertake on their own. North Shore’s deck contractors are professionals, with years of experience in deck construction and repair at their disposal. We’ll take care of your project for you, making sure the deck builder you need gives you the service you want. We make sure our clients never leave unsatisfied with the quality of our work."
   },
   {
    "h": "Fencing Company In Lincolnshire Illinois"
   },
   {
    "p": "North Shore’s fencing company offers services for both homeowners and commercial establishments that can satisfy all of your fence related needs. We offer year long fence installation and fence repair services, and our team of fencing contractors can take care of any project, no matter how big or small. You can choose from a wide variety of styles, sizes, and colors, tailored to your specifications. So give us a call, and we’ll offer our recommendations based on your individual needs and budget."
   },
   {
    "h": "Roofing Companies In Lincolnshire Illinois"
   },
   {
    "p": "North Shore offers roofing services that can meet the needs of any customer. It doesn’t matter if you just need a small roof repair or a complete installation, our roofing contractors will get the job done. With quality materials and professional service, we take on projects for both commercial and residential clients."
   },
   {
    "h": "For a consultation and quote contact us today at (847) 409-5507"
   }
  ],
  "image": img["north-shore-home-3"],
  "imageAlt": "Craftsman-style home with a new roof and porch"
 },
 {
  "slug": "home-improvement-in-long-grove-illinois",
  "title": "Home Improvement in Long Grove Illinois",
  "date": "July 25, 2018",
  "town": true,
  "blocks": [
   {
    "p": "North Shore Home Works offers a variety of home improvement services for our clients. Whether it’s a bathroom remodel, bedroom remodel, or kitchen remodel, we can help you find the design you’ve been looking for in the Long Grove Illinois area. We can improve the look of any room in your house to your satisfaction. From minor repairs to a complete home remodeling, our team will take care of any job you need done."
   },
   {
    "h": "General Contractor In Long Grove Illinois"
   },
   {
    "p": "No matter what you need constructed, North Shore’s general contractor team provides every service necessary for the completion of your project. If it’s residential construction you have in mind, we can build you the home you’ve always dreamed of owning. For the business owner looking to expand, we have over 25 years of experience in commercial construction, all at your disposal. So if you need a building made, just give us a call, and we’ll take care of the rest."
   },
   {
    "h": "Gutter Installation In Long Grove Illinois"
   },
   {
    "p": "Gutter installation is crucial in preventing damage to the roof and foundation of any home or building. Whether it’s just a minor gutter repair or a complete gutter replacement, we make sure that this often-overlooked feature of your building or home stays in functional condition. Neglecting your gutter and downspout system can lead to huge costs down the road, as water damage often goes unnoticed until serious damage has already been done. So, if your home or building needs a gutter installed or repaired, give us a call now, and save yourself some costly repairs."
   },
   {
    "h": "Painting Contractors In Long Grove Illinois"
   },
   {
    "p": "Painting a building yourself can be both time consuming and prohibitively expensive; North Shore’s painting contractors will save you the trouble. For a business, painting or repainting your building can cost you time and money that will be sorely missed. Our commercial painting team will get the job done quickly and at a reasonable cost, to help make sure you don’t lose business to your competitors because of this project. If you are a homeowner, our home painting team will take care of whatever you need done in your house. Whether it’s interior or exterior work, we can guarantee your satisfaction with our services."
   },
   {
    "h": "Deck Builder In Long Grove Illinois"
   },
   {
    "p": "Building a deck is a project that most home or business owners are not prepared to undertake on their own. North Shore’s deck contractors are professionals, with years of experience in deck construction and repair at their disposal. We’ll take care of your project for you, making sure the deck builder you need gives you the service you want. We make sure our clients never leave unsatisfied with the quality of our work."
   },
   {
    "h": "Fencing Company In Long Grove Illinois"
   },
   {
    "p": "North Shore’s fencing company offers services for both homeowners and commercial establishments that can satisfy all of your fence related needs. We offer year long fence installation and fence repair services, and our team of fencing contractors can take care of any project, no matter how big or small. You can choose from a wide variety of styles, sizes, and colors, tailored to your specifications. So give us a call, and we’ll offer our recommendations based on your individual needs and budget."
   },
   {
    "h": "Roofing Companies In Long Grove Illinois"
   },
   {
    "p": "North Shore offers roofing services that can meet the needs of any customer. It doesn’t matter if you just need a small roof repair or a complete installation, our roofing contractors will get the job done. With quality materials and professional service, we take on projects for both commercial and residential clients."
   },
   {
    "h": "For a consultation and quote contact us today at (847) 409-5507"
   }
  ],
  "image": img["north-shore-home-1"],
  "imageAlt": "Brick colonial home on a tree-lined North Shore street"
 },
 {
  "slug": "tips-for-remodeling-your-bathroom",
  "title": "Tips For Remodeling Your Bathroom",
  "date": "June 28, 2018",
  "town": false,
  "blocks": [
   {
    "p": "When it comes to bathroom remodeling, you may be surprised at how quickly you can blow through your budget. Simple renovations can get complicated especially if you do not know what you’re doing. While it may seem like the most expensive option, you should always carefully consider hiring a professional contractor before attempting some changes. It could be the fastest, most economical and best long-term option. But whether you’re on that route or choose to go alone, here are some tips for remodeling your bathroom that will help you save some money."
   },
   {
    "h": "Size"
   },
   {
    "p": "Bathroom remodeling is often done due to space considerations. That is particularly true when it comes to a shared room, and couples think it is difficult to maneuver between them to use the facilities. However, changing the size can also be one of the most expensive things, as it often means breaking down walls. It also means invading space in another place, like in the bedroom. Think carefully before choosing to change the size, since by selecting not to automatically save a significant amount of cash and put it in your budget."
   },
   {
    "h": "Gypsum panel"
   },
   {
    "p": "Some contractors can take a look at water-damaged drywall and recommend replacing the entire wall. However, if you have a different opinion, it is worth seeking another person’s recommendation. Redoing all the drywall when there is only a small amount of damage could be unnecessarily expensive. While he would prefer not to ignore real problems that could pose a threat to his safety, it is often worth getting a couple of different opinions before dumping a lot of cash to a large-scale renovation."
   },
   {
    "h": "Fixtures"
   },
   {
    "p": "Choose if this bathroom remodeling work is about changing the aesthetics of the space or changing to something more functional. That is an important decision, especially regarding how much you should spend. Replacing sinks, bathtubs and other facilities will always increase costs considerably. If you want to change these things because you are not satisfied with their functionality is fine. If you are only implementing improvements because you want a different aspect, there are probably cheaper ways to achieve your goals."
   },
   {
    "h": "Cost of the remodeling project"
   },
   {
    "p": "Perhaps the most crucial question when considering reshaping the bathroom is how much you are willing to spend. The underlying value can be daunting, but remember that a new bathroom is an investment, and spending money at the beginning can save you cash in the long term. For example, a new water-saving shower-head will reduce the cost of your bills every month, and a bathroom screen will not only look attractive, but it will also prevent the wear and tear of your bathroom caused by water and steam, which means that it will last a long time without requiring replacement."
   },
   {
    "h": "Conclusion"
   },
   {
    "p": "Finally, once you have thought about the type of bathroom, you would like help to consider the feasibility of remodeling the bathroom that has as a top priority. That is where North Shore Home Works will come for your help. We will let you visualize the room and give you a good impression of how it will be before concentrating on your final choice. For a consultation and quote contact us today at (847) 409-5507."
   }
  ],
  "image": img["bathroom-remodel"],
  "imageAlt": "Remodeled bathroom with tiled walk-in shower"
 }
];

export const findPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
