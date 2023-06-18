import { useSpring } from '@react-spring/web'
import * as classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import './styles/global.css'
import './styles/tailwind.css'

const images = [
  '/096740b6-d2fa-4ea1-8f0e-e4c8f8a5aece.jpg',
  '/2a3088b8-7b13-4d43-bedf-bd0bba0244f4.jpg',
  '/a54571ea-5930-4e05-b18e-cf2ca1381a2c.jpg',
  '/b40bad53-af4a-4dda-acf0-c67e85ad9148.jpg',
  '/e6f01ba1-20bc-4599-bc37-1de9e456058c.jpg',
]

function App() {
  const [selected, setSelected] = useState<null | number>(null)
  return (
    <div>
      <div className={classNames('grid grid-cols-3 gap-8 p-8')}>
        {images.map((image, i) => (
          <motion.img
            layoutId={String(i)}
            onClick={() => setSelected(i)}
            className='w-full h-full object-cover rounded-lg'
            src={image}
          />
        ))}
      </div>
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='w-full bg-black h-full fixed top-0 left-0 py-8 overflow-y-scroll'
          >
            <div className='w-full flex justify-between items-center'>
              <button
                onClick={() => setSelected(null)}
                className='px-5 py-2 hover:text-gray-400 transition-transform hover:-translate-x-2'
              >
                Go back
              </button>
            </div>
            <motion.div className='flex items-start justify-center flex-col max-w-3xl mx-auto'>
              <motion.h1
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                className='text-2xl font-bold my-4'
                transition={{ delay: 0.25 }}
              >
                This is the title
              </motion.h1>
              <motion.img
                layoutId={String(selected)}
                onClick={() => setSelected(null)}
                className='w-full h-full object-cover rounded-lg'
                style={{ maxWidth: '48rem' }}
                src={images[selected]}
              />
              <div className='my-4'>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Architecto distinctio doloribus mollitia rem. Eveniet veniam
                  nobis, assumenda omnis quo animi mollitia commodi! Veritatis
                  velit repellat minima, eaque quibusdam ullam quisquam? Ab
                  voluptatibus aperiam quo, nostrum ut nisi exercitationem
                  doloribus quas non pariatur possimus provident mollitia quam
                  voluptatem atque quae odio quisquam esse aspernatur veritatis,
                  eligendi facilis optio. Eveniet, vero iure. Non, amet
                  doloremque pariatur, possimus ipsam iure corporis eveniet
                  minima voluptas ea sed error culpa expedita natus incidunt.
                  Voluptate quam in adipisci quos, nam aperiam itaque velit et
                  laborum accusantium? Excepturi sunt quae animi itaque ex, nam,
                  eum aliquid eius voluptate repellat iste laborum nemo numquam
                  error officia ullam. Architecto nihil, magnam impedit aliquam
                  deleniti nulla ab ipsum quibusdam natus? A quasi hic modi
                  minus architecto non amet eum sapiente eveniet autem eligendi,
                  nulla numquam maxime provident dicta atque culpa, laboriosam
                  qui reiciendis maiores quisquam repellat, voluptatibus
                  veritatis officia. Dicta.
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Omnis, perspiciatis consectetur consequatur placeat quaerat
                  delectus, ratione, dicta inventore corporis exercitationem
                  cupiditate minus provident? Aspernatur esse optio atque rem
                  laudantium voluptas. Deleniti modi vero eligendi iure
                  consectetur maiores repellat ratione magni voluptatem
                  voluptatibus, vitae ipsum! Iste minima mollitia eaque laborum?
                  Vitae illo numquam rerum sequi laudantium tenetur veniam
                  suscipit minima consequuntur. Necessitatibus voluptates
                  nostrum ipsa nam ducimus, nisi, vitae facere aut consequatur
                  mollitia soluta, aspernatur suscipit voluptas. Saepe a optio
                  expedita ratione amet, harum nemo, consequatur explicabo dolor
                  fugit ipsam maxime. Quis consequuntur nemo animi soluta
                  laboriosam nihil mollitia eos, ab fugit deleniti, pariatur,
                  inventore maiores. Sint vero ad iure molestiae culpa sit,
                  possimus porro voluptatum. Et culpa dolore iusto aliquid?
                  Aliquam, impedit accusantium. Animi accusantium consectetur
                  placeat deserunt ea quas eligendi vero, rerum repudiandae
                  facilis non amet. Eos velit dolor ut porro vitae temporibus
                  culpa, perspiciatis accusamus tempora, facilis vero! Laborum
                  doloremque, officia quibusdam eius eligendi ipsam aut aperiam
                  repellendus molestiae quas voluptatum repudiandae adipisci
                  commodi, rem cupiditate eos illum quisquam nam ipsa. Ab dolore
                  officiis accusamus distinctio ad voluptate. Ad tempore ratione
                  rerum ex pariatur dolorem nihil itaque error ut unde, sit
                  numquam enim aut, officiis dolor quasi excepturi officia
                  accusantium molestiae. Dolores, velit! Eum accusantium qui
                  nulla aliquam! Ipsam ad accusantium ullam, aspernatur incidunt
                  molestiae iusto officiis doloremque nesciunt quod dolore,
                  repudiandae, laboriosam doloribus ex atque sint qui nemo
                  aliquid blanditiis? Fugiat tenetur possimus quae blanditiis
                  porro explicabo. Officia inventore eius mollitia. Eaque est
                  iusto culpa vero accusantium nisi accusamus, assumenda quod
                  temporibus debitis natus laborum ex, ea sunt corporis, totam
                  voluptatibus ipsa facilis dolorem doloremque sapiente
                  corrupti. Voluptates libero suscipit neque, in voluptatum
                  voluptas natus a quam repellendus unde quibusdam. Possimus
                  modi, a iste voluptatum deserunt recusandae atque corrupti.
                  Deleniti temporibus totam quia nulla, minima labore deserunt.
                  Natus a, quisquam nam distinctio et assumenda molestias
                  labore, tenetur consectetur corrupti officia rem saepe, itaque
                  exercitationem. Libero, ullam quasi. Dolorem aspernatur
                  temporibus nulla laudantium, repellendus consequuntur id
                  ducimus amet. Deserunt, ducimus sunt non cumque voluptates
                  quis quo modi qui sapiente harum nam beatae assumenda itaque.
                  Commodi facilis officia at nesciunt, necessitatibus dolorum
                  ullam tenetur? Ullam mollitia a et deserunt. Eligendi, dicta!
                  Tempora ad ipsa rem aspernatur magnam iure hic. Facere autem
                  sint nostrum, repellendus blanditiis corrupti dolorem, dolor
                  numquam cupiditate vitae aliquam eveniet asperiores
                  architecto, inventore enim aliquid rerum! Vero molestiae
                  dolorum nam, nesciunt fugit impedit illo harum soluta
                  obcaecati dolorem dolore voluptates sint earum facere veniam
                  eligendi eos temporibus, at consequatur necessitatibus dicta!
                  Tenetur ad temporibus quo quia! Similique eos, soluta itaque
                  voluptatem aspernatur excepturi nemo in quae libero dicta
                  aperiam neque culpa, voluptate sit illum possimus
                  exercitationem aliquam sequi, iste saepe inventore?
                  Reprehenderit minima accusantium alias eveniet.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus perferendis accusantium commodi repudiandae porro
                  numquam, officia sit, magnam iste quidem odio consequatur aut
                  non? Rerum cum beatae ducimus blanditiis laboriosam! Corporis
                  doloremque autem, velit incidunt quibusdam ex doloribus cumque
                  rerum repellendus in, natus molestiae vel minus reprehenderit
                  hic quae amet facere qui voluptatum non dignissimos sequi
                  illum? A, aperiam ex. Consectetur commodi iste mollitia
                  veritatis odit perspiciatis dicta in nam error ducimus
                  accusamus veniam saepe sapiente optio repellendus non ex
                  reiciendis explicabo eligendi magnam, eveniet quod dolor
                  voluptatem? Quo, iusto. In provident rem eligendi sunt natus
                  ratione similique totam id commodi, architecto, corrupti sit
                  dolorem consequuntur neque. Est temporibus quaerat magni
                  asperiores soluta possimus suscipit voluptate similique. Quae,
                  exercitationem odio? Quas aliquid officia dolorum nemo
                  accusantium ut a temporibus nisi, laudantium porro maiores
                  voluptatibus molestiae unde cumque, facilis aspernatur odio
                  distinctio nesciunt harum quae dicta repellendus non
                  cupiditate? Natus, nemo. Facere consequatur illum libero
                  perferendis similique et eum doloremque numquam necessitatibus
                  eveniet commodi nobis, iure obcaecati minus voluptate sunt
                  quae praesentium officia architecto, voluptatum deserunt!
                  Magni eum voluptatem illum corrupti. Obcaecati quis molestiae
                  fuga labore! Architecto, eum sapiente modi in error, similique
                  cupiditate aliquam saepe rerum deleniti impedit molestiae!
                  Dicta, similique. Nihil repudiandae, earum exercitationem
                  iusto totam nisi architecto doloremque. Sint eaque animi illo,
                  quibusdam odit vel magni nobis. Tempore architecto ipsa
                  tempora officia voluptas atque hic. Voluptate modi incidunt
                  vel. Nostrum sed autem, id cupiditate reiciendis corporis
                  blanditiis dicta? Suscipit hic, cum amet, placeat
                  reprehenderit nesciunt eaque fugiat at eos, dolores mollitia
                  eligendi reiciendis? Dolores nisi molestiae, eius amet atque
                  dicta, assumenda ratione, ipsa eos suscipit eaque doloremque
                  dignissimos! Porro iste ipsa numquam consequatur veniam
                  excepturi in enim consectetur sit, omnis quo eius et ducimus
                  sed quis quia voluptatem nihil explicabo alias eligendi amet
                  doloribus dolore voluptates. Saepe, modi.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
