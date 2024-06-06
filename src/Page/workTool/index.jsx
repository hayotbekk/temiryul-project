import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { apiUrl, config, token } from '../../api/api'

function WorkTool() {
    const [tools, setTools] = useState(null)

    useEffect(() => {
        getTools()
    }, [])


    const getTools = () => {
        axios.get(`http://164.90.171.135:8081/api/work-tool/work-tool`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
        .then((res) => {
           setTools(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    console.log(tools)

  return (
    <div>
      
    </div>
  )
}

export default WorkTool
