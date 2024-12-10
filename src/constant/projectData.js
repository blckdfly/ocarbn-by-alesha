import project1 from '../assets/project/project1.png';
import project2 from '../assets/project/project2.png';
import project3 from '../assets/project/project3.png';
import project4 from '../assets/project/project4.png';
import project5 from '../assets/project/project5.png';
import project6 from '../assets/project/project6.png';

const projects = [
  {
    id: 1, 
    name: 'Alesha', 
    type: 'Mangrove Conservation', 
    date: '19', 
    year: '2025', 
    description: 'This project focuses on restoring and protecting mangrove forests along the coastal areas of Indonesia, which play a crucial role in capturing atmospheric carbon and reducing greenhouse gases, enhancing biodiversity, and supporting local protection against rising sea levels and climate change impacts.', 
    img: project1,
    longDesc1: "The Alesha project is a vital initiative focused on the restoration and conservation of mangrove forests along the coastal areas near Makassar. Mangroves are one of the planet's most effective carbon sinks, capable of capturing and storing up to four times more carbon than terrestrial forests. This unique ecosystem not only mitigates climate change but also provides a natural barrier against coastal erosion, reducing the impact of storms and rising sea levels on local communities. By safeguarding these areas, the Alesha project ensures the preservation of rich biodiversity, creating a sanctuary for marine species, birds, and other wildlife that rely on mangrove forests for habitat and protection.",
    longDesc2: "Through the Alesha project, users can purchase verified blue carbon credits, allowing them to offset their carbon footprint while directly supporting conservation efforts. Every transaction is securely recorded on the blockchain, ensuring complete transparency and traceability for contributors. These credits represent more than just numbers—they embody a commitment to sustainable development, coastal resilience, and climate action. By participating in this project, contributors are not only investing in environmental restoration but also in the welfare of local communities, which benefit from the improved fishing grounds, job opportunities, and protection that healthy mangroves provide. Alesha exemplifies how innovative solutions like blockchain can empower environmental action, creating a lasting impact for future generation",
    projectScale: 'Local',
    projectOwner: 'Aviaraa',
    timeline: 'August 2025',
    idProject: 'VNK-810193',
    tonnes: 954,
    totalRetirement: 74,
    remainingSupply: 880
  },
  {
    id: 2,
    name: 'Varuna',
    type: 'Seagrasses',
    date: '22',
    year: '2025',
    description: 'Seagrasses cover less than 0.2% of ocean floor, yet store about 10% of the carbon buried in the ocean each year. Varuna seagrasses are being lost at a rate of 1.5% per year and have lost approximately 30% of historical global coverage.',
    img: project2,
    longDesc1: 'The Varuna project focuses on the restoration of vital seagrass ecosystems along Bali\'s coast, which are integral to marine biodiversity and carbon sequestration. These underwater meadows are capable of absorbing and storing significant amounts of carbon dioxide, far more than terrestrial forests. However, these seagrasses are rapidly declining, with losses of over 30% of their historical coverage. By rehabilitating these ecosystems, the Varuna project aims to increase carbon storage, enhance water quality, and support marine life by providing critical habitats for endangered species. The project also works to prevent coastal erosion, thereby protecting vulnerable coastal communities from the impacts of storms and rising sea levels.',
    longDesc2: 'The Varuna project offers individuals and organizations the opportunity to contribute to seagrass conservation through the purchase of blue carbon credits. Each carbon credit represents a verified unit of carbon sequestration linked to the restoration and preservation of seagrass meadows. These credits are securely recorded on the blockchain, ensuring full transparency and accountability for all transactions. By participating in this project, contributors play a key role in mitigating climate change and preserving marine biodiversity, while also supporting local coastal communities. With a growing awareness of the value of seagrasses as climate solutions, Varuna offers an innovative way to combine environmental action with social and economic benefits for coastal populations.',
    projectScale: 'Regional',
    projectOwner: 'Seagrass Alliance',
    timeline: 'July 2025',
    idProject: 'VNK-239842',
    tonnes: 475,
    totalRetirement: 89,
    remainingSupply: 386
  },
  {
    id: 3,
    name: 'Aneira',
    type: 'Mangrove Conservation',
    date: '14',
    year: '2025',
    description: 'Aneira is a project aimed at restoring mangrove ecosystems in coastal areas affected by climate change, helping protect coastlines and capture atmospheric carbon, supporting local communities and biodiversity.',
    img: project3,
    longDesc1: 'The Aneira project is dedicated to restoring and protecting the mangrove forests of Sumatra, which play an essential role in coastal ecosystem health, climate resilience, and carbon sequestration. Mangroves, with their complex root systems, are among the most efficient carbon sinks in the world, capable of storing carbon at much higher rates than terrestrial forests. They also act as natural buffers, reducing the impacts of coastal erosion and providing vital protection against storm surges and rising sea levels. The project focuses on restoring areas that have been devastated by illegal logging, human encroachment, and climate change. In addition to protecting coastal habitats, it helps maintain biodiversity by providing essential breeding grounds for marine species and supporting local wildlife.',
    longDesc2: 'Aneira also provides an opportunity for people and organizations to offset their carbon emissions by purchasing verified blue carbon credits tied to the restoration of mangrove ecosystems. These credits are securely registered on a blockchain platform, ensuring transparency and traceability of all transactions. By supporting this initiative, contributors are helping mitigate the effects of climate change, restore local ecosystems, and empower coastal communities through sustainable livelihoods. This includes creating job opportunities in mangrove nursery management, coastal conservation, and eco-tourism. The project is a powerful example of how local action can address global environmental challenges while benefiting both nature and society.',
    projectScale: 'Local',
    projectOwner: 'EcoSumatra',
    timeline: 'October 2025',
    idProject: 'VNK-387520',
    tonnes: 712,
    totalRetirement: 62,
    remainingSupply: 650
  },
  {
    id: 4,
    name: 'Eulalie',
    type: 'Coral',
    date: '20',
    year: '2025',
    description: 'Eulalie is a coral preservation project dedicated to restoring coral reefs along the Indonesian coast, which are vital to marine biodiversity and play a significant role in capturing carbon dioxide.',
    img: project4,
    longDesc1: 'The Eulalie project is focused on restoring coral reefs in the Raja Ampat region of Indonesia, a global biodiversity hotspot. Coral reefs are not only one of the most diverse ecosystems on the planet but also play a significant role in carbon sequestration, capturing carbon dioxide from the atmosphere. However, coral reefs around the world are under severe threat from rising ocean temperatures, ocean acidification, and human activity. The Eulalie project aims to reverse the damage caused by these threats by restoring degraded coral reefs, protecting the local marine biodiversity, and supporting sustainable fisheries. The project includes coral restoration efforts, reef monitoring, and community outreach to ensure that local populations are actively involved in conservation efforts.',
    longDesc2: 'The Eulalie project offers a unique opportunity for individuals and companies to contribute to marine conservation through the purchase of blue carbon credits, which are directly linked to the restoration of coral reefs. These credits are securely tracked and recorded via blockchain, providing full transparency and ensuring that every contribution has a measurable and lasting impact. By participating in the Eulalie project, supporters are not only helping to mitigate climate change but are also promoting sustainable livelihoods for local communities that rely on the health of coral reefs for fishing and tourism. Eulalie is a model of how innovative conservation efforts, combined with blockchain technology, can drive positive environmental change and support both marine ecosystems and coastal economies.',
    projectScale: 'Global',
    projectOwner: 'Ocean Nexus',
    timeline: 'June 2025',
    idProject: 'VNK-601749',
    tonnes: 1234,
    totalRetirement: 215,
    remainingSupply: 1019
  },
  {
    id: 5,
    name: 'Leander',
    type: 'Seagrasses',
    date: '19',
    year: '2025',
    description: 'Leander is a seagrass initiative focused on restoring seagrass beds to increase the ocean’s carbon absorption capacity and enhance habitats for marine species, all while sustaining the stability of marine ecosystems.',
    img: project5,
    longDesc1: 'The Leander project is a comprehensive initiative focused on restoring seagrass meadows in the coastal waters of Sulawesi. Seagrasses are vital for maintaining healthy marine ecosystems, as they absorb significant amounts of carbon dioxide from the atmosphere, improve water quality, and provide crucial habitats for marine life. Despite their importance, seagrass beds are rapidly declining due to human activities such as coastal development and overfishing. The Leander project aims to reverse this trend by restoring and protecting seagrass ecosystems, which will enhance the stability of marine environments and help mitigate the effects of climate change. The restoration efforts will also provide local communities with opportunities to engage in sustainable activities like eco-tourism and seagrass conservation.',
    longDesc2: 'The Leander project offers individuals and businesses the chance to participate in seagrass conservation by purchasing verified blue carbon credits. Each credit represents a unit of carbon sequestration tied to the restoration and protection of seagrass meadows. Blockchain technology ensures that all transactions are securely recorded, providing full transparency and accountability. By supporting the Leander project, contributors are not only helping to combat climate change but are also investing in the health of marine ecosystems and the livelihoods of local communities. This initiative highlights the power of collective action in addressing climate challenges while creating sustainable economic opportunities for those living along coastal areas.',
    projectScale: 'Regional',
    projectOwner: 'Blue Horizon',
    timeline: 'May 2025',
    idProject: 'VNK-524319',
    tonnes: 890,
    totalRetirement: 155,
    remainingSupply: 735
  },
  {
    id: 6,
    name: 'Ellara',
    type: 'Mangrove',
    date: '18',
    year: '2025',
    description: 'Ellara is a comprehensive project focused on restoring and preserving vital coastal ecosystems, including mangroves, which are essential for carbon capture and storage.',
    img: project6,
    longDesc1: 'The Ellara project is a large-scale mangrove restoration and conservation initiative located along the coasts of Kalimantan, Indonesia. Mangrove ecosystems are among the most important and effective natural carbon sinks, capable of capturing and storing large amounts of carbon over long periods. Additionally, mangroves protect coastal areas from erosion, provide vital breeding grounds for marine life, and support local biodiversity. However, due to deforestation, unsustainable agricultural practices, and the impacts of climate change, these valuable ecosystems are rapidly declining. The Ellara project seeks to restore degraded mangrove forests, improve the resilience of coastal communities, and protect local biodiversity from the impacts of rising sea levels and extreme weather events.',
    longDesc2: 'Ellara offers an opportunity for individuals, organizations, and corporations to support mangrove restoration by purchasing blue carbon credits, which are verified through blockchain technology. These credits represent a commitment to mitigating climate change while protecting the environment and supporting local economies. The project also creates job opportunities for local communities in mangrove management, eco-tourism, and coastal protection. By participating in Ellara, contributors help reverse the effects of deforestation, improve the quality of life for coastal communities, and ensure the sustainability of vital ecosystems. This initiative exemplifies how community-driven conservation efforts can make a meaningful difference in the fight against climate change and environmental degradation.',
    projectScale: 'Global',
    projectOwner: 'Mangrove Action',
    timeline: 'September 2025',
    idProject: 'VNK-930821',
    tonnes: 1320,
    totalRetirement: 280,
    remainingSupply: 1040
  }
];

export default projects;
