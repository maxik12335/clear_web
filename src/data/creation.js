import sofa_1 from '../assets/creations/sofa/screen_1.png'   // пути как у тебя лежат
import sofa_2 from '../assets/creations/sofa/screen_2.png'
import sofa_3 from '../assets/creations/sofa/screen_3.png'
import manikur_before_1 from '../assets/creations/manikur/before/screen_1.png'
import manikur_before_2 from '../assets/creations/manikur/before/screen_2.png'
import manikur_before_3 from '../assets/creations/manikur/before/screen_3.png'
import manikur_after_1 from '../assets/creations/manikur/after/screen_1.png'
import manikur_after_2 from '../assets/creations/manikur/after/screen_2.png'
import manikur_after_3 from '../assets/creations/manikur/after/screen_3.png'

export const creations = [
  {
    title: 'sofa',
    href: 'https://maxik12335.github.io/sofa/',
    type: 'scratch',
    screens: [sofa_1, sofa_2, sofa_3],
  },
  {
    title: 'manikur',
    href: 'https://maxik12335.github.io/manikur/',
    type: 'redesign',
    before: {
      href: 'https://dikidi.net/1772470?p=0.pi',
      screens: [manikur_before_1, manikur_before_2, manikur_before_3],
    },
    after: [manikur_after_1, manikur_after_2, manikur_after_3],
  },
]
