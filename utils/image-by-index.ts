import s1 from '@swc/assets/about-us/s1.jpg';
import s2 from '@swc/assets/about-us/s2.jpg';
import s3 from '@swc/assets/about-us/s3.jpg';
import s4 from '@swc/assets/about-us/s4.jpg';

const images: string[] = [s1.src, s2.src, s3.src, s4.src];

const imageByIndex = (index: number): string => images[index % images.length];

export default imageByIndex;
