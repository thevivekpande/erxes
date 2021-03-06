import { Select } from 'antd';
import * as PropTypes from 'prop-types';
import React from 'react';
import FilterInput from './FilterInput';
import MemberDropdown from './MemberDropdown';
import RemoveButtonGroup from './RemoveButtonGroup';

const FilterGroup = ({
  members,
  availableMembers,
  addMemberName,
  updateMethods,
  schemaType
}) => (
  <span>
    {members.map(m => (
      <div
        style={{
          marginBottom: 12
        }}
        key={m.index}
      >
        <RemoveButtonGroup onRemoveClick={() => updateMethods.remove(m)}>
          <MemberDropdown
            onClick={updateWith =>
              updateMethods.update(m, { ...m, dimension: updateWith })
            }
            availableMembers={availableMembers}
          >
            {m.dimension.title}
          </MemberDropdown>
        </RemoveButtonGroup>
        <Select
          value={m.operator}
          onChange={operator => updateMethods.update(m, { ...m, operator })}
          style={{
            width: 200,
            marginRight: 8,
            marginLeft: 8
          }}
        >
          {m.operators.map(operator => (
            <Select.Option key={operator.name} value={operator.name}>
              {operator.title}
            </Select.Option>
          ))}
        </Select>
        <FilterInput
          member={m}
          key="filterInput"
          updateMethods={updateMethods}
        />
      </div>
    ))}
    <MemberDropdown
      onClick={m =>
        updateMethods.add({
          dimension: m
        })
      }
      availableMembers={availableMembers}
      type="dashed"
      schemaType={schemaType}
    >
      {addMemberName}
    </MemberDropdown>
  </span>
);

FilterGroup.propTypes = {
  members: PropTypes.array.isRequired,
  availableMembers: PropTypes.array.isRequired,
  addMemberName: PropTypes.string.isRequired,
  updateMethods: PropTypes.object.isRequired
};

export default FilterGroup;
