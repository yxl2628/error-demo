import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtImagePicker } from 'taro-ui'

type DogaImage = {
  url: string
}

const dogaImages: DogaImage[] = [
  {
    url: 'https://storage.360buyimg.com/mtd/home/111543234387022.jpg'
  },
  {
    url: 'https://storage.360buyimg.com/mtd/home/221543234387016.jpg'
  },
  {
    url: 'https://storage.360buyimg.com/mtd/home/331543234387025.jpg'
  }
]

interface IndexState {
  [key: string]: DogaImage[]
}

export default class Index extends Taro.Component<{}, IndexState> {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI'
  }

  public constructor() {
    super(...arguments)
    this.state = {
      files1: Array.from(dogaImages),
    }
  }

  private onChange(stateName: string, files: DogaImage[]): void {
    this.setState({
      [stateName]: files
    })
  }

  private onFail(mes: string): void {
    console.log(mes)
  }

  private onImageClick(index: number, file: DogaImage): void {
    console.log(index, file)
  }

  public render(): JSX.Element {
    return (
      <View className='page'>
        <View className='panel__title'>基础用法</View>
        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtImagePicker
                  files={this.state.files1}
                  onChange={this.onChange.bind(this, 'files1')}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}