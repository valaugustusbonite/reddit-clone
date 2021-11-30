import React from 'react'
import NewsfeedCard from './NewsfeedCard'

const NewsfeedListView = () => {

  const dummy: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, similique? Tempora quidem deleniti facilis a fugiat fugit magnam saepe id, quia voluptatibus nam cumque. Explicabo quidem facilis nulla itaque sequi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit enim dolore expedita, voluptates voluptate doloribus incidunt debitis praesentium, eveniet aspernatur, exercitationem voluptatibus ad nemo delectus itaque ipsum corrupti magni! Accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sunt, quam ipsam reiciendis id dignissimos explicabo doloribus voluptatibus porro laboriosam aperiam sequi rem officia eum facere excepturi perferendis veritatis unde!';

  return (
    <div>
      <NewsfeedCard content={dummy} title={'Dummy Title'}/>
    </div>
  )
}

export default NewsfeedListView
