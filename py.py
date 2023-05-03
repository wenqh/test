def uncompress(byte_str, verbose=False):
    # compress data in LZ4 format
    offset = byte_str[0]>>4 #byte_str[0]/16 # >> 4 possible value: 14
    next_backward_length = 4 + byte_str[0] - offset * 16
    pointer = 1
    if offset == 15:
        while byte_str[pointer] == 255:
            pointer += 1
            offset += 255
        offset += byte_str[pointer]
        pointer += 1
    valid_bytes = byte_str[pointer:pointer + offset]
    pointer += offset
    total_len = len(byte_str)

    while pointer < total_len:   
        backward_length = next_backward_length
        distance = int.from_bytes(byte_str[pointer:pointer + 2], 'little')
        pointer += 2
        if backward_length == 19:
            while byte_str[pointer] == 255:
                pointer += 1
                backward_length += 255
            backward_length += byte_str[pointer]
            pointer += 1
        length_info = byte_str[pointer]
        if length_info < 240: # 0b11110000
            pointer += 1
            forward_length = length_info >> 4
            next_backward_length = length_info - forward_length * 16 + 4
        else:
            forward_length = 15
            while byte_str[pointer + 1] == 255:
                pointer += 1
                forward_length += 255
            forward_length += byte_str[pointer + 1]
            next_backward_length = length_info - (length_info >> 4) * 16 + 4
            pointer += 2
        if verbose:
            print(hex(pointer), forward_length)
        if distance == 1:
            for _ in range(backward_length):
                valid_bytes += valid_bytes[-1 :]
        else:
            #print('start@@@')
            #print(distance)
            #print(backward_length)

            while -1 * distance + backward_length > 0:
                print(-1 * distance)
                valid_bytes += valid_bytes[-1 * distance : -1]
                backward_length -= (distance - 1)
            if -1 * distance + backward_length == 0:
                valid_bytes += valid_bytes[-1 * distance :]
            else:
                valid_bytes += valid_bytes[-1 * distance : -1 * distance + backward_length]
        if forward_length > 0:
            valid_bytes += byte_str[pointer: pointer + forward_length]
        pointer += forward_length
        if verbose:
            try:
                print(valid_bytes.decode('utf-8'))
            except:
                pdb.set_trace()
    try:
        return valid_bytes.decode('utf-8')
    except:
        open('a3.bin', 'wb').write(byte_str)
        valid_bytes.decode('utf-8')
