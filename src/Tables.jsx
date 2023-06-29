import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Tables(){
    
    return(
      <div>
        <table>
          <tr>
          <th>name</th>
          <th>age</th>
          <th>role</th>
          </tr>
          <tr>
            <td>mansi</td>
            <td>40</td>
            <td>student</td>
          </tr>
          <tr>
            <td>ritika</td>
            <td>40</td>
            <td>student</td>
          </tr>
          <tr>
            <td>nargis</td>
            <td>40</td>
            <td>student</td>
          </tr>
      
        </table>
        <Button as="input" type="submit" value="Add User"/>
      </div>
    )
}

export default Tables;