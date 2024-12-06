import "../../output.css";
export default function BlogSection() {
  return (
    <div className="flex flex-col w-full h-max">
      <div className="flex justify-center text-white mt-2 mb-16 text-[150px]">
        {"<my_blogs>"}
      </div>
      <BlogHolder
        date={"May 30, 2022"}
        title={"Password Cracking"}
        description={
          "On hearing the term 'password-cracking,' many will think this post will be about how to guess someone's password or somewhat similar, but the reality is not always so satisfying. So, let's start with very basic, what is password cracking really mean? Raw passwords are first passed through the hashing algorithm, which converts the raw passwords into some particular sequence of letters, numbers, and special characters which looks entirely random."
        }
        link={"https://medium.com/vlgiitr/password-cracking-1b14e0844404"}
      />
      <BlogHolder
        date={"Jun 17, 2021"}
        title={"Optimizer: diving deep into Neural Networks"}
        description={
            "Waiting for the neural network to train is always the most annoying time and even more annoying when the datasets are large, but changing the optimization algorithm may bring a significant change in speed as well as accuracy for the deep learning model training"
        }
        link={
            "https://medium.com/vlgiitr/optimizer-diving-into-deep-neural-networks-94a6ee28f7c5"
        }
      />
        <BlogHolder
          date={"May 31, 2021"}
          title={"ResNet-50"}
          description={
            "ResNet-50 is a pretrained convolutional neural network that is trained on over a million images from the ImageNet database. It has 177 layers with 192 connections. It can classify images in 1000 categorical outputs. It has an input image size of 224 x 224 x 3"
          }
          link={"https://medium.com/@gargrohan138/resnet-50-810cf6f02799"}
        />
    </div>
  );
}

function BlogHolder({ date, title, description, link }) {
  return (
    <div className="flex max-xl:flex-col xl:justify-between border-t border-b border-t-[#3C3C3C] border-b-[#3C3C3C] h-max">
      <div className="flex justify-between max-xl:w-full xl:w-1/2 border-r border-r-[#3C3C3C] pt-8 pb-8">
        <div className="text-[#2FCBEF] ml-24 text-xl max-xl:flex max-xl:flex-col max-xl:justify-center">{`{ ${date} }`}</div>
        <div className="text-[#EAF2EF] mr-12 text-4xl w-96 flex">{`< ${title} >`}</div>
      </div>
      <div className="ax-xl:w-full xl:w-1/2  text-[#e6db74] pt-8 pb-8 ml-8 mr-24 text-xl">
        {description}
        {" ..."}
        <a href={link} className="text-[#2FCBEF]">
          read more
        </a>
      </div>
    </div>
  );
}
